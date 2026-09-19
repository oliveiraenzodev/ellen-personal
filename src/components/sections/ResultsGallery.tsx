"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

export function ResultsGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [controls, setControls] = useState({
    hasOverflow: false,
    canGoBack: false,
    canGoForward: false,
  });

  function updateControls() {
    const track = trackRef.current;
    if (!track) return;

    const hasOverflow = track.scrollWidth > track.clientWidth + 1;
    const canGoBack = track.scrollLeft > 1;
    const canGoForward = track.scrollLeft + track.clientWidth < track.scrollWidth - 1;

    setControls({ hasOverflow, canGoBack, canGoForward });
  }

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".result-card");
    const distance = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="results-gallery" data-reveal="up">
      <div className="results-gallery__track" ref={trackRef} onScroll={updateControls}>
        {siteConfig.results.map((result, index) => (
          <figure className="result-card" key={result.src}>
            <Image
              src={result.src}
              alt={result.alt}
              width={result.width}
              height={result.height}
              sizes="(max-width: 767px) 82vw, (max-width: 1023px) 46vw, 280px"
            />
            <figcaption>
              <span>Resultado do acompanhamento</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      {controls.hasOverflow && controls.canGoBack && (
        <button
          className="results-gallery__arrow results-gallery__arrow--previous"
          type="button"
          onClick={() => move(-1)}
          aria-label="Ver resultados anteriores"
        >
          ←
        </button>
      )}
      {controls.hasOverflow && controls.canGoForward && (
        <button
          className="results-gallery__arrow results-gallery__arrow--next"
          type="button"
          onClick={() => move(1)}
          aria-label="Ver próximos resultados"
        >
          →
        </button>
      )}
    </div>
  );
}
