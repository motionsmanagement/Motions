import React from 'react';

const AdBanner: React.FC = () => {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="relative w-full overflow-hidden">
            <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}>
                {/* Background Images */}
                {/* Desktop Version */}
                <div className="hidden md:block w-full">
                    <img 
                        src="/motionsweb.jpg" 
                        alt="Publicidad Motions" 
                        className="w-full h-auto object-cover"
                    />
                </div>
                {/* Mobile Version */}
                <div className="md:hidden w-full">
                    <img 
                        src="/bannermobile.jpg" 
                        alt="Publicidad Motions Mobile" 
                        className="w-full h-auto object-cover"
                    />
                </div>


            </div>
        </section>
    );
};

export default AdBanner;
