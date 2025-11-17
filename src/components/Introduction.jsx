import React from "react";
import Section from "./Section";

const Introduction = () => (
    <Section title="Introducción">
        <p>
            El presente documento contiene el informe técnico de evaluación del
            comportamiento del software desarrollado, aplicando metodologías de
            pruebas de calidad fundamentadas en estándares internacionales como
            ISO/IEC 25010 y las mejores prácticas establecidas por ISTQB y marcos
            ágiles como Scrum.
        </p>
        <p style={{ marginTop: "1rem" }}>
            El objetivo principal es verificar que el software cumple con los
            requisitos funcionales y no funcionales establecidos, garantizando su
            fiabilidad, usabilidad, eficiencia y mantenibilidad antes de su
            despliegue en ambiente productivo.
        </p>
    </Section>
);

export default Introduction;
