import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Instagram, Linkedin, Whatsapp, EnvelopeAtFill, GeoAltFill } from 'react-bootstrap-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer pt-5 pb-3">
      <Container>
        {/* Cambiado text-center a nivel general y text-md-start para pantallas grandes */}
        <Row className="gy-4 mb-5 text-center text-md-start">
          
          {/* Columna Marca */}
          <Col lg={4} md={6}>
            <div className="footer-brand mb-3">
              PIXEL<span>STUDIO</span>
            </div>
            <p className="text-secondary small">
              Soluciones de software y transformación digital. <br />
              Desarrollamos herramientas de alto rendimiento para empresas y organizaciones que buscan liderar en la era digital.
            </p>
            {/* Centrado de iconos en móvil con justify-content-center */}
            <div className="social-links d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a href="https://instagram.com/@pixelstudio.soft" className="social-icon" target="_blank" rel="noreferrer"><Instagram /></a>
              <a href="https://wa.me/5493865692626" className="social-icon" target="_blank" rel="noreferrer"><Whatsapp /></a>
            </div>
          </Col>

          {/* Columna Navegación */}
          <Col lg={2} md={6} className="ps-lg-5">
            <h5 className="text-white fw-bold mb-4">Navegación</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#inicio">Nosotros</a></li>
              <li><a href="#soluciones">Servicios</a></li>
              <li><a href="#precios">Planes de Inversión</a></li>
            </ul>
          </Col>

          {/* Columna Contacto Profesional */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">Canales Directos</h5>
            <address className="text-secondary small">
              {/* Centrado de los bloques de contacto en móvil con justify-content-center */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <EnvelopeAtFill className="text-info me-2" />
                <span>silvaivan280@gmail.com</span>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <Whatsapp className="text-info me-2" />
                <span>+54 9 3865 692626</span>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <GeoAltFill className="text-info me-2" />
                <span>Tucumán, Argentina</span>
              </div>
            </address>
          </Col>

          {/* Columna Call to Action rápido */}
          {/* Cambiado text-lg-end por text-md-start y text-lg-end para mantener la armonía */}
          <Col lg={3} md={6} className="text-center text-md-start text-lg-end">
            <h5 className="text-white fw-bold mb-4">¿Iniciamos tu proyecto?</h5>
            <p className="text-secondary small">Solicitá un presupuesto a medida y recibí asesoramiento técnico especializado.</p>
            <a href="https://wa.me/5493865692626" className="btn btn-info btn-sm fw-bold px-4 py-2 mt-2">
              Contacto Directo
            </a> 
          </Col>
        </Row>

        <hr className="border-secondary opacity-25" />

        <Row className="pt-3">
          <Col md={12} className="text-center">
            <p className="text-secondary small mb-0">
              © {currentYear} <strong>PIXELSTUDIO</strong>. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;