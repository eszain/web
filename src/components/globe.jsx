"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [55.6761, 12.5683], size: 0.08 }, // Copenhagen, Denmark
    { location: [51.5074, -0.1278], size: 0.08 }, // London, UK
    { location: [53.4808, -2.2426], size: 0.08 }, // Manchester, UK
    { location: [31.5497, 74.3436], size: 0.08 }, // Lahore, Pakistan
    { location: [24.8607, 67.0011], size: 0.08 }, // Karachi, Pakistan
    { location: [6.9271, 79.8612], size: 0.08 },  // Colombo, Sri Lanka
    { location: [30.0444, 31.2357], size: 0.08 }, // Cairo, Egypt
    { location: [43.6532, -79.3832], size: 0.08 }, // Toronto, Canada
    { location: [18.5601, -68.3725], size: 0.08 }, // Punta Cana, Dominican Republic
    { location: [38.9072, -77.0369], size: 0.08 }, // Washington DC, USA
    { location: [40.4406, -79.9959], size: 0.08 }, // Pittsburgh, USA
    { location: [24.7136, 46.6753], size: 0.08 }, // Riyadh, Saudi Arabia
    { location: [21.3891, 39.8579], size: 0.08 }, // Mecca, Saudi Arabia
    { location: [24.5247, 39.5692], size: 0.08 }, // Medina, Saudi Arabia
    { location: [25.2048, 55.2708], size: 0.08 }, // Dubai, UAE
    { location: [25.2854, 51.5310], size: 0.08 }, // Doha, Qatar
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
