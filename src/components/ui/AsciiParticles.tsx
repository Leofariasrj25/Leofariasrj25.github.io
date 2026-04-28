import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "@/config/theme";

const CHARS = [".", "*", "+", "·", "°", "•"];
const FONT_SIZE = 18;
const CENTER_WIDTH = 800;
const EDGE_MARGIN = 80;
const CONNECT_DISTANCE = 150;
const MOBILE_BREAKPOINT = 768;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  opacity: number;
  life: number;
  color: string;
}

interface AsciiParticlesProps {
  enabled?: boolean;
}

const AsciiParticles: React.FC<AsciiParticlesProps> = ({ enabled = true }) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const themeRef = useRef(theme);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    themeRef.current = theme;
    particlesRef.current = [];
  }, [theme]);

  useEffect(() => {
    if (!enabled) {
      setShouldAnimate(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    if (prefersReducedMotion || isMobile) {
      setShouldAnimate(false);
      return;
    }

    setShouldAnimate(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = () => themeRef.current === "dark";

    const getComputedColors = (): string[] => {
      const root = document.documentElement;
      if (isDark()) {
        const c1 = getComputedStyle(root).getPropertyValue("--particle-dark-1").trim();
        const c2 = getComputedStyle(root).getPropertyValue("--particle-dark-2").trim();
        const c3 = getComputedStyle(root).getPropertyValue("--particle-dark-3").trim();
        return [c1 || "253, 186, 116", c2 || "251, 146, 60", c3 || "249, 115, 22"];
      } else {
        const c1 = getComputedStyle(root).getPropertyValue("--particle-light-1").trim();
        const c2 = getComputedStyle(root).getPropertyValue("--particle-light-2").trim();
        const c3 = getComputedStyle(root).getPropertyValue("--particle-light-3").trim();
        return [c1 || "234, 88, 22", c2 || "249, 115, 22", c3 || "251, 146, 60"];
      }
    };

    const getColors = getComputedColors;

    const isInEdgeZone = (x: number, width: number): boolean => {
      const centerStart = (width - CENTER_WIDTH) / 2;
      const centerEnd = centerStart + CENTER_WIDTH;
      return x < centerStart - EDGE_MARGIN || x > centerEnd + EDGE_MARGIN;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const isSmallScreen = window.innerWidth < MOBILE_BREAKPOINT;
    const SPAWN_RATE = isSmallScreen ? 0.04 : 0.08;
    const MAX_PARTICLES = isSmallScreen ? 15 : 35;

    const spawnParticle = (): Particle => {
      let x: number, y: number;
      let attempts = 0;

      do {
        x = EDGE_MARGIN + Math.random() * (canvas.width - EDGE_MARGIN * 2);
        y = Math.random() * canvas.height;
        attempts++;
      } while (!isInEdgeZone(x, canvas.width) && attempts < 20);

      if (!isInEdgeZone(x, canvas.width)) {
        x = Math.random() < 0.5 ? EDGE_MARGIN : canvas.width - EDGE_MARGIN;
      }

      const colors = getColors();
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        opacity: 0.4 + Math.random() * 0.4,
        life: 1,
        color,
      };
    };

    const drawLine = (p1: Particle, p2: Particle, dist: number, lineColor: string) => {
      const opacity = 1 - dist / CONNECT_DISTANCE;
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const rotation = (angle * 180) / Math.PI;
      const chars = ["-", "-", "-"];

      ctx.save();
      ctx.fillStyle = `rgba(${lineColor}, ${opacity * 0.4})`;
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 1; i < chars.length + 1; i++) {
        const t = i / (chars.length + 1);
        const x = p1.x + (p2.x - p1.x) * t;
        const y = p1.y + (p2.y - p1.y) * t;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.fillText(chars[i - 1], 0, 0);
        ctx.restore();
      }

      ctx.restore();
    };

    const draw = () => {
      const colors = getColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < SPAWN_RATE && particlesRef.current.length < MAX_PARTICLES) {
        const p = spawnParticle();
        if (isInEdgeZone(p.x, canvas.width)) {
          particlesRef.current.push(p);
        }
      }

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;

        if (Math.random() < 0.01) {
          p.vx = (Math.random() - 0.5) * 1.5;
          p.vy = (Math.random() - 0.5) * 1.5;
        }

        p.life -= 0.0008;

        if (p.life <= 0 || !isInEdgeZone(p.x, canvas.width)) {
          particlesRef.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.fillStyle = `rgba(${p.color}, ${p.life * p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);

        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            const lineColor = colors[Math.floor(Math.random() * colors.length)];
            drawLine(p, p2, dist, lineColor);
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [shouldAnimate]);

  if (!shouldAnimate) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${!enabled ? "hidden" : ""}`}
    />
  );
};

export default AsciiParticles;
