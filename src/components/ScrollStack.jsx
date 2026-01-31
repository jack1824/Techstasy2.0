import React, { useRef, useEffect, useState } from "react";

export function ScrollStackItem({ children, itemClassName }) {
  return (
    <div className={`scroll-stack-item ${itemClassName || ""}`}>
      {children}
    </div>
  );
}

function ScrollStack({
  children,
  className = "",
  itemDistance = 150,
  itemScale = 0.04,
  itemStackDistance = 40,
  stackPosition = "25%",
  scaleEndPosition = "15%",
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 2,
  useWindowScroll = true,
  onStackComplete,
}) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on container position
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;
      const scrollRange = rect.height - windowHeight;

      let progress = 0;
      if (scrollStart <= 0) {
        progress = Math.abs(scrollStart) / scrollRange;
      }

      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      // Check if stack is complete
      if (progress >= 0.95 && onStackComplete) {
        onStackComplete();
      }
    };

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [useWindowScroll, onStackComplete]);

  const childrenArray = React.Children.toArray(children);
  const itemCount = childrenArray.length;

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`}>
      <div className="scroll-stack-wrapper" style={{ position: "relative" }}>
        {childrenArray.map((child, index) => {
          // Calculate individual item progress
          const itemProgress =
            (scrollProgress * itemCount - index) / (itemCount - 1);
          const clampedProgress = Math.min(Math.max(itemProgress, 0), 1);

          // Scale calculation
          const scale = baseScale + (1 - baseScale) * (1 - clampedProgress);

          // Stack distance (y-offset)
          const stackOffset = itemStackDistance * index * (1 - clampedProgress);

          // Rotation
          const rotation = rotationAmount * clampedProgress;

          // Blur
          const blur = blurAmount * clampedProgress;

          // Opacity
          const opacity = 1 - clampedProgress * 0.3;

          // Z-index (reverse order so first items are on top when stacked)
          const zIndex = itemCount - index;

          // Sticky positioning
          const isSticky = clampedProgress < 1;
          const position = isSticky ? "sticky" : "relative";
          const top = isSticky ? stackPosition : "auto";

          return (
            <div
              key={index}
              className="scroll-stack-item-wrapper"
              style={{
                position,
                top,
                zIndex,
                transform: `translateY(${stackOffset}px) scale(${scale}) rotate(${rotation}deg)`,
                filter: `blur(${blur}px)`,
                opacity,
                transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
                marginBottom: index < itemCount - 1 ? `${itemDistance}px` : 0,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollStack;