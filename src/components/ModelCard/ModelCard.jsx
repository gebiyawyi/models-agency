import React, { useState } from "react";
import "./ModelCard.css";

function ModelCard({ model }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="model-card">
        <div className="model-card-image">
          <img src={model.image} alt={model.name} />
          <div className="model-card-overlay">
            <span className="model-category">{model.category}</span>
          </div>
        </div>
        <div className="model-card-content">
          <h3>{model.name}</h3>
          <div className="model-card-details">
            <span>{model.age} years</span>
            <span>{model.height}</span>
          </div>
          <p>{model.description}</p>
          <button className="model-card-btn" onClick={openModal}>
            View Profile
          </button>
        </div>
      </div>

      {/* Modal - Popup */}
      {showModal && (
        <div className="model-modal" onClick={closeModal}>
          <div
            className="model-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="model-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="model-modal-body">
              <div className="model-modal-image">
                <img src={model.image} alt={model.name} />
              </div>
              <div className="model-modal-info">
                <span className="model-modal-category">{model.category}</span>
                <h2>{model.name}</h2>
                <div className="model-modal-details">
                  <p>
                    <strong>Age:</strong> {model.age} years
                  </p>
                  <p>
                    <strong>Height:</strong> {model.height}
                  </p>
                  <p>
                    <strong>Category:</strong> {model.category}
                  </p>
                </div>
                <p className="model-modal-description">{model.description}</p>

                <div className="model-modal-stats">
                  <div className="stat">
                    <span className="stat-number">{model.shows || "50+"}</span>
                    <span className="stat-label">Shows</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">
                      {model.campaigns || "30+"}
                    </span>
                    <span className="stat-label">Campaigns</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{model.awards || "5"}</span>
                    <span className="stat-label">Awards</span>
                  </div>
                </div>

                <button className="model-modal-book">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelCard;
