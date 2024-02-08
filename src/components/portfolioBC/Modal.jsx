// components/Modal.js
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        {item && (
          <div className="modal-container">
            <div className="modal-image">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="modal-details">
              <h2>{item.name}</h2>
              <p>
                <strong>Model:</strong> {item.model}
              </p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Description:</strong> {item.description}
              </p>
              {/* Add any other details you want to display */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
