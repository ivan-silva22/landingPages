import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Laptop from 'react-bootstrap-icons/dist/icons/laptop';
import Gear from 'react-bootstrap-icons/dist/icons/gear';
import Phone from 'react-bootstrap-icons/dist/icons/phone'; 
import ShieldCheck from 'react-bootstrap-icons/dist/icons/shield-check';

const Features = () => {
  const features = [
    {
      icon: <Laptop size={40} />,
      title: "Software a Medida",
      desc: "Soluciones exclusivas diseñadas para optimizar la operativa específica de tu negocio."
    },
    {
      icon: <Gear size={40} />,
      title: "Sistemas de Gestión",
      desc: "Control total de stock, reportes automáticos y administración centralizada de datos."
    },
    {
      icon: <Phone size={40} />, 
      title: "Experiencia Mobile",
      desc: "Plataformas optimizadas para garantizar una navegación fluida desde cualquier celular."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Seguridad y Soporte",
      desc: "Estructuras protegidas y preparadas para crecer al ritmo de tu empresa."
    }
  ];

  return (
    <section id="soluciones" className="features-section py-5">
      <Container>
        <header className="text-center mb-5">
          <h2 className="text-white display-6 fw-bold">Tecnología diseñada para resultados</h2>
          <div className="underline mx-auto"></div>
        </header>

        <Row className="g-4">
          {features.map((f, i) => (
            <Col key={i} md={6} lg={3}>
              <article className="feature-card text-center p-4">
                <div className="icon-container mb-3 text-info">
                  {f.icon}
                </div>
                <h3 className="h5 text-white fw-bold">{f.title}</h3>
                <p className="text-secondary small">{f.desc}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;