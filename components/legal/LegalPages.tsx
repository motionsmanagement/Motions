
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
            <h2 className="text-2xl font-semibold text-black mb-4">1. Responsable del Tratamiento</h2>
            <p>Motions, con domicilio en Madrid, España, y correo electrónico de contacto <strong>info@motions.es</strong>, es el responsable del tratamiento de sus datos personales recogidos a través de este sitio web. Nos comprometemos a garantizar la privacidad de nuestros usuarios y la protección de sus datos bajo el Reglamento General de Protección de Datos (RGPD).</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Datos Recogidos y Finalidad</h2>
            <p>Tratamos la información que nos facilita con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestión de solicitudes de información y consultas recibidas a través de formularios de contacto.</li>
                <li>Prestación de servicios de marketing digital, SEO local y diseño web contratados.</li>
                <li>Envío de comunicaciones comerciales y boletines informativos relacionados con el sector gastronómico, siempre que contemos con su consentimiento explícito.</li>
                <li>Mejora de la experiencia de usuario y análisis estadístico de la navegación web.</li>
            </ul>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Conservación de los Datos</h2>
            <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales. En el caso de suscripciones a boletines, los datos se mantendrán hasta que el interesado solicite su baja.</p>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Legitimación del Tratamiento</h2>
            <p>La base legal para el tratamiento de su información reside en:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>El consentimiento del interesado para el envío de consultas o suscripciones.</li>
                <li>La ejecución de un contrato de prestación de servicios.</li>
                <li>El interés legítimo de Motions para mejorar sus servicios y seguridad.</li>
            </ul>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Derechos del Usuario</h2>
            <p>Usted puede ejercer en cualquier momento sus derechos de:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Acceso:</strong> Saber qué datos estamos tratando.</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
                <li><strong>Supresión (Olvido):</strong> Solicitar la eliminación de sus datos.</li>
                <li><strong>Oposición y Limitación:</strong> Oponerse al tratamiento para fines específicos.</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
            </ul>
            <p className="mt-4">Para ejercer estos derechos, envíe un correo electrónico a <strong>info@motions.es</strong> adjuntando copia de su DNI o documento equivalente.</p>
        </section>
    </LegalPage>
);

export const CookiesPolicy: React.FC = () => (
    <LegalPage title="Política de Cookies">
        <p className="mb-6">En Motions utilizamos cookies propias y de terceros para optimizar su experiencia de navegación y analizar el tráfico en nuestro sitio web. Una cookie es un pequeño archivo de texto que se descarga en su equipo al acceder a determinadas páginas web.</p>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Tipos de Cookies que utilizamos</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-medium text-black mb-2">1. Cookies Técnicas</h3>
                    <p>Son aquellas esenciales para el correcto funcionamiento del sitio, permitiendo la navegación y el uso de las diferentes opciones o servicios que en ella existen.</p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-black mb-2">2. Cookies de Personalización</h3>
                    <p>Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como el idioma.</p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-black mb-2">3. Cookies de Análisis (Analytics)</h3>
                    <p>Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web para mejorar la oferta de servicios.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Gestión y Desactivación de Cookies</h2>
            <p>El usuario puede, en cualquier momento, permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Bloquear todas las cookies.</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies y datos del sitio.</li>
            </ul>
            <p className="mt-4 italic text-sm">Tenga en cuenta que la desactivación de algunas cookies puede impedir o dificultar la navegación o la prestación de los servicios ofrecidos en este sitio web.</p>
        </section>
    </LegalPage>
);

export const LegalNotice: React.FC = () => (
    <LegalPage title="Aviso Legal">
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Información General</h2>
            <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos informativos:</p>
            <ul className="list-none space-y-2 mt-4">
                <li><strong>Titular:</strong> Motions</li>
                <li><strong>Domicilio:</strong> Madrid, España</li>
                <li><strong>Email:</strong> info@motions.es</li>
                <li><strong>Actividad:</strong> Agencia de Marketing Especializada en Restauración</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Condiciones de Uso</h2>
            <p>El acceso y uso de este sitio web atribuyen la condición de USUARIO, que acepta los términos y condiciones aquí reflejados. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Motions ofrece a través de su portal y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p>Motions por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).</p>
            <p className="mt-4">Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización previa y por escrito de Motions.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
            <p>Motions no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
        </section>
    </LegalPage>
);
