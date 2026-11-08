import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close dialog">&times;</button>
        {item.img && <img src={item.img} alt={item.name} className="speaker-img" />}
        <h2 id="modal-title" className="modal-title">
            {item.name || item.title}
        </h2>
        {item.name && item.title && <p className="speaker-title modal-speaker-title">{item.title}</p>}
        <p className="modal-description">{item.description}</p>
      </div>
    </div>
  );
};

export default Modal;
