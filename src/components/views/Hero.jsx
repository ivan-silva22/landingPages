import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="inicio" className="hero-layout d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="hero-text-content">
            <header>
              <Badge bg="info" className="mb-3 px-3 py-2 text-dark fw-bold">
                TRANSFORMACIÓN DIGITAL PARA EMPRESAS
              </Badge>
              <h1 className="display-3 fw-bold text-white mb-4">
                Soluciones digitales para <br />
                <span className="text-info">empresas que evolucionan.</span>
              </h1>
            </header>
            
            <article>
              <p className="lead text-secondary mb-5">
                Impulsamos tu organización mediante la digitalización de procesos y el desarrollo de plataformas web de alta velocidad. 
                Construimos herramientas modernas, seguras y totalmente escalables.
                <br /><br />
                <span className="text-white">Proyectos a medida desde <strong>$100.000</strong> con opciones de financiación.</span>
              </p>
            </article>

            <footer className="hero-actions d-flex gap-3 flex-wrap">
              <Button variant="info" size="lg" className="btn-main-call" href="https://wa.me/5493865692626" target="_blank">
                Solicitar Consultoría
              </Button>
            </footer>
          </Col>
          
          <Col lg={5} className="d-none d-lg-block text-center">
            <div className="hero-visual-container">
              <div className="glow-effect"></div>
              <img 
                src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?t=st=1716315580~exp=1716319180~hmac=..." 
                alt="Transformación Digital" 
                className="img-fluid hero-mockup" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;