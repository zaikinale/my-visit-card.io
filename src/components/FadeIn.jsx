import { useRef, useEffect } from 'react';
import '../assets/styles/main.scss';

export default function FadeIn({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('fade-in--visible');
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div ref={ref} className="fade-in">
            {children}
        </div>
    );
}