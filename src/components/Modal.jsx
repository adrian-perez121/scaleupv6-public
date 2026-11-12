import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  // Speakers have name + title (title = position); workshops have title + subtitle (presenter)
  const heading = item.name || item.title;
  const subtitle = item.name ? item.title : item.subtitle;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close dialog">&times;</button>
        <div className="modal-scroll">
          <div className="modal-top">
            {item.img && (
              <div className="modal-device-screen">
                <img src={item.img} alt={item.name} className="speaker-img modal-speaker-img" />
              </div>
            )}
            <div className="modal-top-info">
              <h2 id="modal-title" className="modal-title">
                {heading}
              </h2>
              {subtitle && <p className="speaker-title modal-speaker-title">{subtitle}</p>}
            </div>
          </div>
          {item.img && <div className="modal-device-footer" aria-hidden="true" />}
          <p className="modal-description">{item.description}</p>
          {/* No photo (workshops): button + grill go at the bottom */}
          {!item.img && <div className="modal-device-footer" aria-hidden="true" />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
