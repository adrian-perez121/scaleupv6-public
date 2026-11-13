import React from 'react';

// Turns any http(s) URLs in a description into clickable links
const linkify = (text) =>
  (text || '').split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="modal-link">{part}</a>
    ) : part
  );

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
            {!item.img && item.bot && (
              <div className="modal-device-screen modal-device-screen-bot">
                <img src={item.bot} alt="" className="modal-bot-img" />
              </div>
            )}
            <div className="modal-top-info">
              <h2 id="modal-title" className="modal-title">
                {heading}
              </h2>
              {subtitle && <p className="speaker-title modal-speaker-title">{subtitle}</p>}
            </div>
          </div>
          {item.name && <div className="modal-device-footer" aria-hidden="true" />}
          <p className="modal-description">{linkify(item.description)}</p>
          {/* Workshops: button + grill go at the bottom */}
          {!item.name && <div className="modal-device-footer" aria-hidden="true" />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
