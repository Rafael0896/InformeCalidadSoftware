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
                    <li>Casos de prueba ejecutados</li>
                    <li>Tasa de éxito de pruebas</li>
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

            <Card title="Fidelidades de Medición" icon="">
                <p>
                    Nivel de confianza: 95%<br/>
                    Margen de error: ±3%<br/>
                    Repetibilidad: Alta
                </p>
            </Card>

            <Card title="Criterios de Aprobación" icon="">
                <ul className="card-list">
                    <li>Cobertura ≥ 80%</li>
                    <li>Defectos críticos: 0</li>
                    <li>Tasa éxito ≥ 95%</li>
                    <li>Tiempo respuesta &lt; 3s</li>
                </ul>
            </Card>

            <Card title="Infraestructura" icon="">
                <ul className="card-list">
                    <li>Servidor QA: AWS EC2</li>
                    <li>Base de datos: PostgreSQL</li>
                    <li>CI/CD: Jenkins</li>
                    <li>Automatización: Selenium</li>
                </ul>
            </Card>
        </div>
    </Section>
);

export default ResourcesSummary;
