import React from "react";
import Section from "./Section";
import Card from "./Card";

const ResourcesSummary = () => (
    <Section title="Resumen de Recursos Utilizados">
        <div className="cards-grid">
            <Card title="Equipo Evaluador" icon="">
                <ul className="card-list">
                    <li>Líder QA: María González</li>
                    <li>Tester Senior: Carlos Ramírez</li>
                    <li>Tester Junior: Ana López</li>
                    <li>Automatización: Jorge Martínez</li>
                </ul>
            </Card>

            <Card title="Métricas Utilizadas" icon="">
                <ul className="card-list">
                    <li>Densidad de defectos</li>
                    <li>Cobertura de código</li>
                    <li>Tasa de éxito</li>
                </ul>
            </Card>

            <Card title="Ponderación" icon="">
                <p>
                    Funcionalidad: 40%<br/>
                    Rendimiento: 25%<br/>
                    Seguridad: 20%<br/>
                    Usabilidad: 15%
                </p>
            </Card>

            <Card title="Infraestructura" icon="">
                <ul className="card-list">
                    <li>AWS EC2</li>
                    <li>PostgreSQL</li>
                    <li>Jenkins</li>
                    <li>Selenium</li>
                </ul>
            </Card>
        </div>
    </Section>
);

export default ResourcesSummary;
