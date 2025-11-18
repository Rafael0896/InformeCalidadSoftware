import React from "react";
import Section from "./Section";

const GoodPractices = () => (
    <Section title="Buenas Prácticas de Calidad Aplicadas">
        <div className="practices-grid">
            <div className="practice-item">
                <h3> ISO/IEC 25010</h3>
                <p>
                    Evaluación basada en características como funcionalidad, confiabilidad
                    y mantenibilidad.
                </p>
            </div>

            <div className="practice-item">
                <h3> ISTQB</h3>
                <p>Técnicas de pruebas: caja negra, caja blanca y basadas en riesgos.</p>
            </div>

            <div className="practice-item">
                <h3> Scrum</h3>
                <p>Pruebas continuas dentro de los sprints y validación con Product Owner.</p>
            </div>

            <div className="practice-item">
                <h3> Buenas Prácticas Generales</h3>
                <p>
                    Automatización, CI/CD, documentación, trazabilidad y gestión de
                    defectos.
                </p>
            </div>
        </div>
    </Section>
);

export default GoodPractices;
