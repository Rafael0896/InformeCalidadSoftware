import React from "react";
import Section from "./Section";
import Card from "./Card";

const SoftwareDescription = () => (
    <Section title="Software Evaluado">
        <div className="cards-grid">
            <Card title="Nombre del Software" icon="">
                <p><strong>Sistema de Gestión Académica - SGA V2.0</strong></p>
            </Card>

            <Card title="Objetivo" icon="">
                <p>
                    Automatizar los procesos de inscripción, matrícula, gestión de notas y
                    generación de certificados académicos.
                </p>
            </Card>

            <Card title="Tipo de Aplicación" icon="">
                <p>Aplicación web progresiva (PWA) en React + Node.js</p>
            </Card>

            <Card title="Alcance de Pruebas" icon="">
                <ul className="card-list">
                    <li>Funcionalidad completa</li>
                    <li>Rendimiento bajo carga</li>
                    <li>Seguridad</li>
                    <li>Usabilidad</li>
                    <li>Compatibilidad cross-browser</li>
                </ul>
            </Card>
        </div>
    </Section>
);

export default SoftwareDescription;
