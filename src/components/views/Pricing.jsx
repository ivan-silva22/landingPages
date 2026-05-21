import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import CheckCircleFill from 'react-bootstrap-icons/dist/icons/check-circle-fill';

const Pricing = () => {
  const plans = [
    {
      title: "Presencia Digital",
      price: "100.000",
      description: "La solución ideal para profesionales y comercios que buscan su primer lugar en la web.",
      features: ["Diseño Profesional Único", "Adaptado a Celulares", "Enlace directo a WhatsApp", "Ubicación en Google Maps", "Configuración de Hosting"],
      highlight: false
    },
    {
      title: "Impulso Empresarial",
      price: "180.000",
      description: "Diseñado para empresas que necesitan mostrar sus servicios y captar nuevos clientes.",
      features: ["Sitio Multi-sección Completo", "Catálogo de Productos/Servicios", "Formulario de Consultas", "Optimización en Buscadores", "Soporte Prioritario"],
      highlight: true 
    },
    {
      title: "Sistemas a Medida",
      price: "300.000",
      description: "Desarrollo de herramientas exclusivas para automatizar y gestionar tu operativa.",
      features: ["Panel de Control Privado", "Gestión de Inventario y Usuarios", "Base de Datos Inteligente", "Reportes de Rendimiento", "Capacitación de Personal"],
      highlight: false
    }
  ];

  return (
    <section id="precios" className="pricing-section py-5">
      <Container>
        <header className="text-center mb-5">
          <Badge bg="info" className="mb-2 text-dark fw-bold">FINANCIACIÓN Y CUOTAS</Badge>
          <h2 className="text-white display-5 fw-bold">Planes de Inversión</h2>
          <p className="text-secondary lead">Soluciones escalables que crecen junto a tu negocio.</p>
        </header>

        <Row className="g-4 align-items-center">
          {plans.map((plan, i) => (
            <Col key={i} lg={4}>
              <article className={`pricing-card-wrapper ${plan.highlight ? 'featured' : ''}`}>
                <Card className="pricing-card h-100 shadow-lg">
                  {plan.highlight && <div className="popular-badge">EL MÁS ELEGIDO</div>}
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title className="h4 fw-bold text-info mb-3">{plan.title}</Card.Title>
                    <div className="price-container mb-4">
                      <span className="currency text-white">$</span>
                      <span className="amount text-white">{plan.price}</span>
                      <span className="period text-secondary">/pago inicial*</span>
                    </div>
                    <p className="text-light small mb-4">{plan.description}</p>
                    <hr className="border-secondary opacity-25" />
                    <ul className="feature-list list-unstyled mb-5 flex-grow-1">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="text-secondary mb-3 d-flex align-items-center">
                          <CheckCircleFill className="text-info me-2" size={16} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <footer className="mt-auto text-center">
                      <Button variant={plan.highlight ? 'info' : 'outline-info'} size="lg" className="w-100 fw-bold mb-3" href="https://wa.me/5493865692626"  target="_blank">
                        Consultar Financiación
                      </Button>
                      <small className="text-secondary d-block">* Consultar mantenimiento y actualizaciones</small>
                    </footer>
                  </Card.Body>
                </Card>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;