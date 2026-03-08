
import { useState, useEffect } from 'react';

const DC_NS = 'http://purl.org/dc/elements/1.1/';

const normalizeDateString = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.trim().replace(/\s+/g, ' ');
};

/** Try to parse a date string (RFC 2822, ISO 8601, or partial) and return ISO string; else return normalized raw. */
const toStoredDate = (raw) => {
  const s = normalizeDateString(raw);
  if (!s) return '';
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d.toISOString();
  const isoMatch = s.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    const [, y, m, d2] = isoMatch;
    const d3 = new Date(Number(y), Number(m) - 1, Number(d2));
    if (!Number.isNaN(d3.getTime())) return d3.toISOString();
  }
  const rfcMatch = s.match(/(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  if (rfcMatch) {
    const [, day, month, year] = rfcMatch;
    const d4 = new Date(`${month} ${day}, ${year}`);
    if (!Number.isNaN(d4.getTime())) return d4.toISOString();
  }
  return s;
};

const extractPubDate = (item) => {
  let raw = item.querySelector('pubDate')?.textContent ?? '';
  if (raw) return toStoredDate(raw);
  for (const el of item.children || []) {
    if (el.tagName === 'pubDate' || el.localName === 'pubDate') {
      raw = el.textContent ?? '';
      if (raw) return toStoredDate(raw);
      break;
    }
  }
  try {
    const dcDate = item.getElementsByTagNameNS?.(DC_NS, 'date');
    if (dcDate?.length && dcDate[0].textContent) return toStoredDate(dcDate[0].textContent);
  } catch (_) {}
  const dcColon = item.querySelector('dc\\:date');
  if (dcColon?.textContent) return toStoredDate(dcColon.textContent);
  return '';
};

/** Fallback: derive a date from article link (e.g. .../2026/... or .../view/794) using current year. */
const fallbackDateFromLink = (link) => {
  if (!link) return '';
  const yearMatch = link.match(/\/(20\d{2})\//);
  const year = yearMatch ? yearMatch[1] : String(new Date().getFullYear());
  return `${year}-01-01T00:00:00.000Z`;
};

const extractKeywords = (item, description) => {
  const keywordsSet = new Set();
  const text = description || '';

  const descMatch = text.match(/Keywords?:\s*([^<]+)/i);
  if (descMatch && descMatch[1]) {
    descMatch[1].split(/,\s*/).forEach((kw) => {
      const trimmed = kw.trim();
      if (trimmed) keywordsSet.add(trimmed);
    });
  }

  const keywordCategories = item.querySelectorAll('category[domain*="keywords"]');
  keywordCategories.forEach((cat) => {
    const value = cat.textContent || '';
    value.split(/,\s*/).forEach((kw) => {
      const trimmed = kw.trim();
      if (trimmed) keywordsSet.add(trimmed);
    });
  });

  return Array.from(keywordsSet);
};

const parseRSS = (xmlText, sourceUrl) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  if (xmlDoc.querySelector('parsererror')) return [];
  
  const items = xmlDoc.querySelectorAll('item');
  const articles = [];
  
  let journalName = 'Unknown';
  if (sourceUrl.includes('rasp')) journalName = 'RASP';
  if (sourceUrl.includes('ajdi')) journalName = 'AJDI';

  items.forEach(item => {
    const title = item.querySelector('title')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    let pubDate = extractPubDate(item);
    if (!pubDate) pubDate = fallbackDateFromLink(link);
    
    const authors = extractAuthors(item, description);
    const doi = extractDOI(item, description);
    const pdfLink = extractPDFLink(item, description);
    const keywords = extractKeywords(item, description);
    
    articles.push({
      title,
      authors,
      link,
      pubDate,
      doi,
      pdfLink,
      keywords,
      journal: journalName,
    });
  });
  
  return articles;
};

const extractAuthors = (item, description) => {
  const fromDcCreator = [];
  try {
    const creators = item.getElementsByTagNameNS?.(DC_NS, 'creator');
    if (creators?.length) {
      for (let i = 0; i < creators.length; i++) {
        const name = creators[i].textContent?.trim();
        if (name) fromDcCreator.push(name);
      }
    }
  } catch (_) {}
  if (fromDcCreator.length) return fromDcCreator.join(', ');
  const dcColon = item.querySelector('dc\\:creator');
  if (dcColon?.textContent?.trim()) return dcColon.textContent.trim();
  for (const el of item.children || []) {
    if (el.tagName === 'dc:creator' || el.localName === 'creator') {
      const name = el.textContent?.trim();
      if (name) fromDcCreator.push(name);
    }
  }
  if (fromDcCreator.length) return fromDcCreator.join(', ');
  const authorsMatch = description.match(/Authors?:\s*([^<]+)/i);
  return authorsMatch ? authorsMatch[1].trim() : '';
};

const extractDOI = (item, description) => {
  const text = description || '';
  let match = text.match(/10\.\d{4,}\/[^\s<&]+/);
  if (match) return match[0];
  try {
    const dcId = item.getElementsByTagNameNS?.(DC_NS, 'identifier');
    if (dcId?.length) {
      const raw = dcId[0].textContent?.trim() || '';
      const doi = raw.replace(/^doi:\s*/i, '').match(/10\.\d{4,}\/[\s\S]+/);
      if (doi) return doi[0].trim();
    }
  } catch (_) {}
  const prismDoi = item.querySelector('prism\\:doi');
  if (prismDoi?.textContent?.trim()) return prismDoi.textContent.trim();
  return null;
};

const extractPDFLink = (item, description) => {
  const enclosure = item.querySelector('enclosure[type="application/pdf"]');
  if (enclosure?.getAttribute('url')) return enclosure.getAttribute('url');
  const anyEnclosure = item.querySelector('enclosure[url*=".pdf"]');
  if (anyEnclosure?.getAttribute('url')) return anyEnclosure.getAttribute('url');
  const links = item.querySelectorAll('link');
  for (const link of links) {
    const url = link.textContent?.trim();
    if (url?.includes('.pdf')) return url;
  }
  const text = description || '';
  const hrefMatch = text.match(/href\s*=\s*["']([^"']*\.pdf[^"']*)["']/i) || text.match(/(https?:\/\/[^\s<>"']+\.pdf)/i);
  if (hrefMatch) return hrefMatch[1].replace(/&amp;/g, '&');
  return null;
};

const buildFeedCandidates = (url) => {
  const candidates = [url];
  if (!url || typeof url !== 'string') return candidates;

  if (url.includes('/gateway/plugin/WebFeedGatewayPlugin/rss2') && !url.includes('/index.php/')) {
    candidates.push(url.replace('://revue-rasp.org/', '://revue-rasp.org/index.php/'));
    candidates.push(url.replace('://press.b-institute.org/', '://press.b-institute.org/index.php/'));
  }

  if (url.startsWith('https://')) {
    candidates.push(`http://${url.slice('https://'.length)}`);
  }

  return Array.from(new Set(candidates));
};

const fetchFeedXml = async (url) => {
  const endpoints = [
    url,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;
      const xmlText = await response.text();
      if (xmlText && xmlText.includes('<item')) return xmlText;
    } catch (_) {}
  }

  return '';
};

export const useRSSFeed = (feedUrls, limit = 10) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const urls = Array.isArray(feedUrls) ? feedUrls : [feedUrls];
        if (urls.length === 0 || !urls[0]) {
            setLoading(false);
            return;
        }

        const fetchPromises = urls.map(async (url) => {
            const candidates = buildFeedCandidates(url);

            for (const candidate of candidates) {
              try {
                const xmlText = await fetchFeedXml(candidate);
                if (!xmlText) continue;
                const parsed = parseRSS(xmlText, url);
                if (parsed.length > 0) return parsed;
              } catch (err) {
                console.error(`RSS fetch error for ${candidate}:`, err);
              }
            }

            console.warn(`Failed to fetch RSS feed from ${url}`);
            return []; // Return empty array so Promise.all doesn't fail
        });

        const results = await Promise.all(fetchPromises);

        const byNewest = (a, b) => {
          const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
          const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
          if (Number.isNaN(dateA)) return dateB ? 1 : 0;
          if (Number.isNaN(dateB)) return -1;
          return dateB - dateA;
        };

        // Sort each feed independently, then interleave to keep a visible mix.
        const sortedByFeed = results.map((feedArticles) => [...feedArticles].sort(byNewest));
        const mixedArticles = [];
        let row = 0;

        while (mixedArticles.length < limit) {
          let addedAtThisRow = false;

          for (const feedArticles of sortedByFeed) {
            if (row < feedArticles.length) {
              mixedArticles.push(feedArticles[row]);
              addedAtThisRow = true;
              if (mixedArticles.length >= limit) break;
            }
          }

          if (!addedAtThisRow) break;
          row += 1;
        }

        setArticles(mixedArticles);
      } catch (err) {
        console.error('RSS combined fetch error:', err);
        setError('Failed to load some articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeeds();
  }, [JSON.stringify(feedUrls), limit]); // Use JSON.stringify to avoid infinite loops if array reference changes

  return { articles, loading, error };
};
