import React, { useRef, useState, useEffect, useCallback } from "react";
import mapImage from "../../assets/images/other/ScaleUPv6_Map_.svg";

const MIN_SCALE = 1;
const MAX_SCALE = 5;

// Map viewer with pinch / wheel / button zoom and drag to pan.
const MapSection = () => {
  const frameRef = useRef(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });

  // Keep the image covering the frame so it can't be dragged out of view
  const clamp = useCallback((v) => {
    const frame = frameRef.current;
    if (!frame) return v;
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale));
    const { width, height } = frame.getBoundingClientRect();
    const minX = width - width * scale;
    const minY = height - height * scale;
    return {
      scale,
      x: Math.min(0, Math.max(minX, v.x)),
      y: Math.min(0, Math.max(minY, v.y)),
    };
  }, []);

  // Zoom around a point (in frame coordinates)
  const zoomAt = useCallback(
    (nextScale, cx, cy) => {
      setView((v) => {
        const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale));
        const ratio = scale / v.scale;
        return clamp({
          scale,
          x: cx - (cx - v.x) * ratio,
          y: cy - (cy - v.y) * ratio,
        });
      });
    },
    [clamp],
  );

  const zoomBy = (factor) => {
    const { width, height } = frameRef.current.getBoundingClientRect();
    zoomAt(view.scale * factor, width / 2, height / 2);
  };

  // Wheel needs a non-passive listener so the page doesn't scroll while zooming
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const onWheel = (e) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const rect = frame.getBoundingClientRect();
      zoomAt(
        view.scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15),
        e.clientX - rect.left,
        e.clientY - rect.top,
      );
    };
    frame.addEventListener("wheel", onWheel, { passive: false });
    return () => frame.removeEventListener("wheel", onWheel);
  }, [view.scale, zoomAt]);

  const distance = () => {
    const [a, b] = [...pointers.current.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  const onPointerDown = (e) => {
    frameRef.current.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    gesture.current = { view, dist: pointers.current.size === 2 ? distance() : 0 };
  };

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const rect = frameRef.current.getBoundingClientRect();
    if (pointers.current.size === 2) {
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const [a, b] = [...pointers.current.values()];
      const cx = (a.x + b.x) / 2 - rect.left;
      const cy = (a.y + b.y) / 2 - rect.top;
      const { dist, view: start } = gesture.current;
      if (dist) zoomAt(start.scale * (distance() / dist), cx, cy);
    } else if (view.scale > 1) {
      setView((v) =>
        clamp({ ...v, x: v.x + e.clientX - prev.x, y: v.y + e.clientY - prev.y }),
      );
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }
  };

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId);
    gesture.current = null;
    // Re-baseline the remaining finger so a pinch doesn't jump into a pan
    pointers.current.forEach((p, id) => pointers.current.set(id, p));
  };

  const onDoubleClick = (e) => {
    const rect = frameRef.current.getBoundingClientRect();
    if (view.scale > 1) setView({ scale: 1, x: 0, y: 0 });
    else zoomAt(2.5, e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <section id="map" className="section content-section map-section">
      <div className="container">
        <h2 className="section-title section-title-tight">Map</h2>
        <div className="section-title-separator"></div>
        <div className="map-frame">
          <div
            ref={frameRef}
            className={`map-viewport${view.scale > 1 ? " is-zoomed" : ""}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDoubleClick={onDoubleClick}
          >
            <img
              src={mapImage}
              alt="ScaleUP event map"
              className="map-image"
              draggable={false}
              style={{
                transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              }}
            />
          </div>
          <div className="map-controls">
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => zoomBy(1.5)}
              disabled={view.scale >= MAX_SCALE}
            >
              +
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => zoomBy(1 / 1.5)}
              disabled={view.scale <= MIN_SCALE}
            >
              −
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
