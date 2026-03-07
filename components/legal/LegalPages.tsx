
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const LegalPage: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-white font-['Inter']">
            <Navbar />
            <main className="pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-12">{title}</h1>
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export const PrivacyPolicy: React.FC = () => (
    <LegalPage title="Política de Privacidad">
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Identificación del Responsable</h2>
            <p>Motions, con domicilio en Madrid, España, y correo electrónico de contacto info@motions.es, es el responsable del tratamiento de sus datos personales.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Finalidad del Tratamiento</h2>
            <p>Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten, facilitar a los interesados ofertas de productos y servicios de su interés.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Legitimación</h2>
            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado al contactar con nosotros o solicitar nuestros servicios.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Destinatarios</h2>
            <p>No se cederán datos a terceros, salvo obligación legal.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Derechos</h2>
            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Motions estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</p>
        </section>
    </LegalPage>
);

export const CookiesPolicy: React.FC = () => (
    <LegalPage title="Política de Cookies">
        <p>En Motions utilizamos cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestra web.</p>
        <section className="mt-8 mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Tipos de cookies que utilizamos:</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
                <li><strong>Cookies de análisis:</strong> Nos permiten medir el tráfico y mejorar el contenido.</li>
            </ul>
        </section>
        <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie.</p>
    </LegalPage>
);

export const LegalNotice: React.FC = () => (
    <LegalPage title="Aviso Legal">
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Datos Identificativos</h2>
            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: el titular de dominio web es Motions, con email info@motions.es.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Usuarios</h2>
            <p>El acceso y/o uso de este portal de Motions atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Uso del Portal</h2>
            <p>motions.es proporciona el acceso a multitud de informaciones, servicios, programas o datos en Internet pertenecientes a Motions a los que el USUARIO pueda tener acceso.</p>
        </section>
    </LegalPage>
);
