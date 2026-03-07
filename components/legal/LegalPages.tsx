
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
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
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
        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Identificación del Responsable</h2>
            <p>Motions, con domicilio social en Madrid, España, y correo electrónico de contacto info@motions.es, informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <p>Motions tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar los formularios incluidos en el sitio web. En este sentido, Motions será considerada como responsable de los datos recabados mediante los medios anteriormente descritos.</p>
            <p className="mt-4">A su vez Motions informa a los usuarios de que la finalidad del tratamiento de los datos recabados contempla: La atención de solicitudes realizadas por los usuarios, la inclusión en la agenda de contactos, la prestación de servicios, la gestión de la relación comercial y otras finalidades comerciales relacionadas con el sector del marketing para restauración.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">3. Comunicación de Información a Terceros</h2>
            <p>Motions informa a los usuarios de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos este amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">4. Derechos de los Usuarios</h2>
            <p>La Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales.</p>
            <p className="mt-4">En tanto en cuanto los datos del usuario son objeto de tratamiento por parte de Motions. Los usuarios podrán ejercer los derechos de acceso, rectificación, cancelación y oposición de acuerdo con lo previsto en la normativa legal vigente en materia de protección de datos personales.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 font-medium">
                <li>Derecho de Acceso: Conocer si estamos tratando sus datos.</li>
                <li>Derecho de Rectificación: Rectificar datos inexactos.</li>
                <li>Derecho de Supresión (Olvido): Solicitar la eliminación de sus datos.</li>
                <li>Derecho de Oposición: Oponerse a ciertos tratamientos.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">5. Plazo de Conservación</h2>
            <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
        </section>
    </LegalPage>
);

export const CookiesPolicy: React.FC = () => (
    <LegalPage title="Política de Cookies">
        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">¿Qué son las Cookies?</h2>
            <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Tipos de Cookies Utilizadas por Motions</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-medium text-black">1. Cookies Propias</h3>
                    <p>Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-black">2. Cookies de Terceros</h3>
                    <p>Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-black">3. Cookies de Análisis</h3>
                    <p>Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Cómo Desactivar las Cookies</h2>
            <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
            <p className="mt-4 italic">Tenga en cuenta que si elimina o bloquea las cookies de este sitio web, es posible que algunas funciones no estén disponibles o que la calidad de la página web se vea afectada.</p>
        </section>
    </LegalPage>
);

export const LegalNotice: React.FC = () => (
    <LegalPage title="Aviso Legal">
        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">1. Datos Identificativos</h2>
            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos: la empresa titular de dominio web es Motions, con email de contacto info@motions.es, con sede en Madrid, España.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">2. Propiedad Intelectual e Industrial</h2>
            <p>Motions por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).</p>
            <p className="mt-4">Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Motions.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">3. Exclusión de Garantías y Responsabilidad</h2>
            <p>Motions no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">4. Modificaciones</h2>
            <p>Motions se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
        </section>
    </LegalPage>
);
