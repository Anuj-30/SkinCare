import React, { useRef, useState, useEffect } from 'react';

const Text = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const paragraph = `
    Experience the ultimate in skincare with our expertly formulated products,
    crafted to nourish, protect, and rejuvenate your skin. Combining the finest
    natural ingredients with advanced science, our collection ensures every
    skin type can achieve a radiant, healthy glow. Embrace your beauty with
    confidence every day. Let your skincare routine be a ritual of self-love
    and transformation — where science meets nature and you meet your best self.
  `;

  const words = paragraph.trim().split(/\s+/);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How far has the section scrolled into view (0 to 1)
      const visible = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);
      setScrollProgress(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-6 py-16 max-w-4xl mx-auto text-xl font-light leading-relaxed"
    >
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {words.map((word, i) => {
          const threshold = i / words.length; // each word has a point where it becomes black
          const isRevealed = scrollProgress >= threshold;

          return (
            <span
              key={i}
              className={`transition-colors duration-300 ${
                isRevealed ? 'text-black' : 'text-gray-400'
              }`}
            >
              {word}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Text;
