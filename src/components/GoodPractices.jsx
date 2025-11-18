import React from "react";
import Section from "./Section";

const GoodPractices = () => (
    <Section title="Buenas Prácticas de Calidad Aplicadas">
        <div className="practices-grid">
            <div className="practice-item">
                <h3> ISO/IEC 25010</h3>
                <p>
                    Evaluación de calidad del producto basada en características como funcionalidad,
                    confiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.
                </p>
            </div>

            <div className="practice-item">
                <h3> ISTQB</h3>
                <p>
                    Aplicación de técnicas de pruebas del International Software Testing Qualifications Board,
                    incluyendo pruebas de caja negra, caja blanca y pruebas basadas en riesgos.
                </p>
            </div>

            <div className="practice-item">
                <h3> Scrum</h3>
                <p>
                    Integración de pruebas continuas dentro de los sprints, con sesiones de refinamiento
                    y validación constante con el Product Owner.
                </p>
            </div>

            <div className="practice-item">
                <h3> Buenas Prácticas Generales</h3>
                <p>
                    Automatización de pruebas, integración continua, documentación detallada,
                    trazabilidad de requisitos y gestión de defectos.
                </p>
            </div>
        </div>
    </Section>
);

export default GoodPractices;
