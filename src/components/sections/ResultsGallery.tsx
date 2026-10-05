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
    currentIndex: 1,
  });

  function updateControls() {
    const track = trackRef.current;
    if (!track) return;

    const hasOverflow = track.scrollWidth > track.clientWidth + 1;
    const canGoBack = track.scrollLeft > 1;
    const canGoForward = track.scrollLeft + track.clientWidth < track.scrollWidth - 1;
    const card = track.querySelector<HTMLElement>(".result-card");
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(track).gap) : track.clientWidth;
    const currentIndex = Math.min(siteConfig.results.length, Math.round(track.scrollLeft / step) + 1);

    setControls({ hasOverflow, canGoBack, canGoForward, currentIndex });
  }

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".result-card");
    const distance = card ? card.offsetWidth + parseFloat(getComputedStyle(track).gap) : track.clientWidth;
    track.scrollBy({
      left: distance * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
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
      <div
        className="results-gallery__track"
        ref={trackRef}
        onScroll={updateControls}
        tabIndex={0}
        aria-label="Registros de evolução. Deslize horizontalmente para ver todos."
      >
        {siteConfig.results.map((result, index) => (
          <figure className={`result-card result-card--${index + 1}`} key={result.src}>
            <div className="result-card__media">
              <Image
                src={result.src}
                alt={result.alt}
                fill
                sizes="(max-width: 767px) 82vw, (max-width: 1023px) 46vw, 280px"
              />
            </div>
            <figcaption>
              <span>{result.caption}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      {controls.hasOverflow && (
        <div className="results-gallery__controls">
          <p className="results-gallery__status">
            <span className="results-gallery__hint">Deslize para explorar</span>
            <span className="results-gallery__count" aria-live="polite" aria-atomic="true">
              {String(controls.currentIndex).padStart(2, "0")}
              <span aria-hidden="true"> / </span>
              {String(siteConfig.results.length).padStart(2, "0")}
            </span>
          </p>
          <div className="results-gallery__navigation" aria-label="Navegar pelos resultados">
            <button
              className="results-gallery__arrow results-gallery__arrow--previous"
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver resultado anterior"
              disabled={!controls.canGoBack}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 12H4m0 0 7-7m-7 7 7 7" />
              </svg>
            </button>
            <button
              className="results-gallery__arrow results-gallery__arrow--next"
              type="button"
              onClick={() => move(1)}
              aria-label="Ver próximo resultado"
              disabled={!controls.canGoForward}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h16m0 0-7-7m7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
