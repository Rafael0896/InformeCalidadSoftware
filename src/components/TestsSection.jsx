import React from "react";
import Section from "./Section";

const TestsSection = () => {
    const tests = [
        {
            id: 'TC-001',
            caso: 'Login de usuario con credenciales válidas',
            objetivo: 'Verificar autenticación correcta',
            esperado: 'Usuario accede al dashboard',
            obtenido: 'Usuario accede correctamente',
            estado: 'Exitoso'
        },
        {
            id: 'TC-002',
            caso: 'Registro de estudiante con datos completos',
            objetivo: 'Validar creación de registro',
            esperado: 'Estudiante registrado en BD',
            obtenido: 'Registro exitoso con ID generado',
            estado: 'Exitoso'
        },
        {
            id: 'TC-003',
            caso: 'Carga de archivo mayor a 10MB',
            objetivo: 'Verificar límite de tamaño',
            esperado: 'Sistema rechaza el archivo',
            obtenido: 'Sistema permite carga',
            estado: 'Fallido'
        },
        {
            id: 'TC-004',
            caso: 'Generación de certificado académico',
            objetivo: 'Validar formato PDF generado',
            esperado: 'PDF con datos correctos',
            obtenido: 'PDF generado correctamente',
            estado: 'Exitoso'
        },
        {
            id: 'TC-005',
            caso: 'Búsqueda de estudiantes por nombre',
            objetivo: 'Verificar funcionalidad de búsqueda',
            esperado: 'Listado de coincidencias',
            obtenido: 'Resultados correctos en <2s',
            estado: 'Exitoso'
        }
    ];

    return (
        <Section title="Pruebas Realizadas">
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Caso</th>
                        <th>Objetivo</th>
                        <th>Esperado</th>
                        <th>Obtenido</th>
                        <th>Estado</th>
                    </tr>
                    </thead>

                    <tbody>
                    {tests.map((t) => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.caso}</td>
                            <td>{t.objetivo}</td>
                            <td>{t.esperado}</td>
                            <td>{t.obtenido}</td>
                            <td>
                  <span className={`status-badge status-${t.estado.toLowerCase()}`}>
                    {t.estado}
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </Section>
    );
};

export default TestsSection;
