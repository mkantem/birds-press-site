import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 320);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <Button
            type="button"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={[
                'fixed bottom-6 right-6 z-50 rounded-full shadow-lg',
                'bg-slate-900 text-white hover:bg-slate-700',
                'transition-all duration-300',
                isVisible
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0',
            ].join(' ')}
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    );
};

export default ScrollToTop;
