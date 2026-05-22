import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  BoxArrowUpRight,
  AppIndicator,
  Shop,
  GraphUp,
} from "react-bootstrap-icons";

const Projects = () => {
  const projects = [
    {
      title: "Gestión Ciudadana",
      category: "Solución Gubernamental",
      desc: "Plataforma de reclamos y seguimiento ciudadano.",
      link: "https://gestionciudadana.vercel.app/",
      icon: <AppIndicator size={30} />,
    },
    {
      title: "E-commerce",
      category: "Venta Automatizada",
      desc: "Tienda online con gestión de inventario en tiempo real.",
      link: "#",
      icon: <Shop size={30} />,
    },
    {
      title: "Gestión Fitness",
      category: "Inteligencia Deportiva",
      desc: "Generador de rutinas inteligentes basado en objetivos: Volumen, Definición o Fuerza.",
      link: "#",
      icon: <GraphUp size={30} />,
    },
  ];

  return (
    <section id="proyectos" className="projects-section py-5">
      <Container>
        <header className="text-center mb-5">
          <Badge bg="info" className="mb-2 text-dark fw-bold">
            PORTAFOLIO
          </Badge>
          <h2 className="text-white display-5 fw-bold">
            Soluciones Implementadas
          </h2>
        </header>

        <Row className="g-4">
          {projects.map((proj, i) => (
            <Col key={i} md={4}>
              <Card className="project-card h-100 border-0 shadow-lg">
                <Card.Body className="p-4">
                  <div className="project-icon mb-3 text-info">{proj.icon}</div>
                  <Card.Title className="text-white fw-bold">
                    {proj.title}
                  </Card.Title>
                  <Badge bg="info" className="mb-3 text-dark">
                    {proj.category}
                  </Badge>
                  <Card.Text className="text-secondary">{proj.desc}</Card.Text>

                  <a
                    href={proj.link !== "#" ? proj.link : undefined}
                    target={proj.link !== "#" ? "_blank" : "_self"}
                    rel={proj.link !== "#" ? "noreferrer" : undefined}
                    className={`text-info text-decoration-none fw-bold ${proj.link === "#" ? "text-secondary" : ""}`}
                    style={{
                      cursor: proj.link === "#" ? "default" : "pointer",
                      pointerEvents: proj.link === "#" ? "none" : "auto",
                    }}
                  >
                    {proj.link !== "#" ? "Ver sistema" : "En desarrollo"}
                    {proj.link !== "#" && (
                      <BoxArrowUpRight className="ms-1" size={14} />
                    )}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
