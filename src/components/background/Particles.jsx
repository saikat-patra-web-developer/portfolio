import React, { useEffect, useRef } from "react";

export const Particles = ({
  mousePos = { x: -1000, y: -1000 },
  isMobile = false,
  prefersReducedMotion = false
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // If reduced motion is requested, render static subtle dots once and stop loop
    const particleCount = isMobile ? 12 : 24;
    const speedMultiplier = prefersReducedMotion ? 0 : 0.6;

    const particles = [];
    const colors = [
      "rgba(0, 229, 255, 0.6)",
      "rgba(39, 135, 255, 0.5)",
      "rgba(168, 85, 247, 0.5)",
      "rgba(123, 60, 255, 0.4)"
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.25 * speedMultiplier,
        vy: (Math.random() - 0.5) * 0.25 * speedMultiplier,
        pulseSpeed: Math.random() * 0.015 + 0.008,
        pulse: Math.random() * Math.PI,
        baseRadius: Math.random() * 1.5 + 0.6
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      const maxDistance = isMobile ? 80 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles & update
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Desktop gentle mouse avoidance
          if (!isMobile && mousePos.pixelX && mousePos.pixelY) {
            const mdx = p.x - mousePos.pixelX;
            const mdy = p.y - mousePos.pixelY;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const mouseRadius = 90;

            if (mDist < mouseRadius) {
              const force = (1 - mDist / mouseRadius) * 0.5;
              p.x += (mdx / mDist) * force;
              p.y += (mdy / mDist) * force;
            }
          }

          p.pulse += p.pulseSpeed;
        }

        const currentRadius = p.baseRadius + (prefersReducedMotion ? 0 : Math.sin(p.pulse) * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile, mousePos.pixelX, mousePos.pixelY, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
    />
  );
};

export default Particles;
