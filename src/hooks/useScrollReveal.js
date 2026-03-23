import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Respect user preference for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Unobserve once visible so it stays visible
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, isVisible };
}
