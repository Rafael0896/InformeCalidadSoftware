import React from "react";
import Section from "./Section";

const BitacoraSection = () => {
    const bitacora = [
        {
            fecha: '2025-11-01',
            actividad: 'Planificación de pruebas',
            evidencia: 'Plan_Pruebas_v1.0.pdf',
            responsable: 'María González',
            observaciones: 'Definición de alcance y recursos'
        },
        {
            fecha: '2025-11-03',
            actividad: 'Diseño de casos de prueba',
            evidencia: 'Casos_Prueba.xlsx',
            responsable: 'Carlos Ramírez',
            observaciones: '45 casos diseñados'
        },
        {
            fecha: '2025-11-06',
            actividad: 'Ejecución de pruebas funcionales',
            evidencia: 'Resultados_Sprint1.pdf',
            responsable: 'Ana López',
            observaciones: '38/40 casos exitosos'
        },
        {
            fecha: '2025-11-10',
            actividad: 'Pruebas de rendimiento',
            evidencia: 'Metricas_Performance.xlsx',
            responsable: 'Jorge Martínez',
            observaciones: 'Tiempo respuesta promedio: 1.8s'
        },
        {
            fecha: '2025-11-14',
            actividad: 'Regresión y cierre',
            evidencia: 'Informe_Final.pdf',
            responsable: 'María González',
            observaciones: 'Todos los defectos críticos resueltos'
        }
    ];

    return (
        <Section title="Bitácora de Procesos Documentales">
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Actividad</th>
                        <th>Evidencia</th>
                        <th>Responsable</th>
                        <th>Observaciones</th>
                    </tr>
                    </thead>

                    <tbody>
                    {bitacora.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fecha}</td>
                            <td>{item.actividad}</td>
                            <td>{item.evidencia}</td>
                            <td>{item.responsable}</td>
                            <td>{item.observaciones}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
};

export default BitacoraSection;
