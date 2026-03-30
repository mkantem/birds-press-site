import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';
import { getSearchIndex } from '@/lib/searchIndex';

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const SearchPage = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('q') || '');

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('q') || '');
  }, [location.search]);

  const content = {
    en: {
      title: 'Search',
      metaDescription: 'Search BIRDs Press policies and journal pages.',
      heading: 'Search the site',
      intro: 'Find publishing policies and journal pages quickly.',
      placeholder: 'Search policies, APC, privacy, AJDI, RASP...',
      submit: 'Search',
      noResults: 'No results matched your search.',
      empty: 'Try searching for AI policy, privacy, APC, AJDI, or RASP.',
      category: { policies: 'Policy', journals: 'Journal' },
      resultsLabel: 'results',
    },
    fr: {
      title: 'Recherche',
      metaDescription: 'Recherchez les politiques et les pages de revues de BIRDs Press.',
      heading: 'Rechercher sur le site',
      intro: 'Trouvez rapidement les politiques de publication et les pages de revues.',
      placeholder: 'Rechercher politiques, APC, confidentialite, AJDI, RASP...',
      submit: 'Rechercher',
      noResults: 'Aucun resultat ne correspond a votre recherche.',
      empty: 'Essayez IA, confidentialite, APC, AJDI ou RASP.',
      category: { policies: 'Politique', journals: 'Revue' },
      resultsLabel: 'resultats',
    },
  };

  const c = content[language];
  const items = useMemo(() => getSearchIndex(language), [language]);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      return [];
    }

    const terms = normalize(trimmed).split(/\s+/).filter(Boolean);

    return items
      .map((item) => {
        const title = normalize(item.title);
        const description = normalize(item.description);
        const keywords = (item.keywords || []).map((keyword) => normalize(keyword));
        const haystack = [title, description, ...keywords].join(' ');

        let score = 0;

        terms.forEach((term) => {
          if (title.includes(term)) score += 5;
          if (description.includes(term)) score += 2;
          if (keywords.some((keyword) => keyword.includes(term))) score += 3;
          if (haystack.includes(term)) score += 1;
        });

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  }, [items, query]);

  const searchBasePath = language === 'fr' ? '/recherche' : '/search';

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/${language}${searchBasePath}?q=${encodeURIComponent(trimmed)}` : `/${language}${searchBasePath}`);
  };

  return (
    <>
      <Seo title={c.title} description={c.metaDescription} />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">{c.heading}</h1>
            <p className="text-lg text-gray-700">{c.intro}</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-10 rounded-2xl bg-white p-4 shadow-md sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={c.placeholder}
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-[#1e3a5f] px-6 py-3 font-semibold text-white transition hover:bg-[#2a4a75]"
              >
                {c.submit}
              </button>
            </div>
          </form>

          {query.trim() ? (
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-gray-500">
              {results.length} {c.resultsLabel}
            </div>
          ) : null}

          {query.trim() && results.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <p className="mb-2 text-lg font-semibold text-gray-900">{c.noResults}</p>
              <p className="text-gray-600">{c.empty}</p>
            </div>
          ) : null}

          {!query.trim() ? (
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <p className="text-gray-600">{c.empty}</p>
            </div>
          ) : null}

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={`/${language}${result.path}`}
                  className="block rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-[#1e3a5f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1e3a5f]">
                      {c.category[result.category]}
                    </span>
                  </div>
                  <h2 className="mb-2 text-2xl font-semibold text-gray-900">{result.title}</h2>
                  <p className="mb-3 text-gray-600">{result.description}</p>
                  <p className="text-sm text-[#1e3a5f]">{`/${language}${result.path}`}</p>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
