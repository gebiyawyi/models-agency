import React from "react";
import ModelCard from "../ModelCard/ModelCard";
import { models } from "../../data/models";
import "./ModelsSection.css";

function ModelsSection() {
  const featuredModels = models.slice(0, 4);

  return (
    <section id="models" className="models-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Talent</span>
          <h2>Featured Models</h2>
          <p>
            Meet our diverse roster of professional models ready for your next
            project
          </p>
        </div>
        <div className="models-grid">
          {featuredModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModelsSection;
