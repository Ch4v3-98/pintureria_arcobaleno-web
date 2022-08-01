import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {
  Clock,
  Envelope,
  House,
  Telephone,
  Whatsapp,
} from 'react-bootstrap-icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../components/TextField';
import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';

interface ContactInputs {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export function Contact() {
  const { register, handleSubmit } = useForm<ContactInputs>();

  const [validated, setValidated] = useState(false);

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    setValidated(true);
  };

  return (
    <Container className="my-3 my-lg-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">Contacto</Heading>
          <section>
            <h5 className="mb-3 text-primary">Ventas / Atención al Cliente</h5>
            <Row>
              <div>
                <House size={18} className="me-2" />
                <span style={{ fontSize: '0.95rem' }}>
                  San Martín 230 - Gálvez, Santa Fe, Argentina
                </span>
              </div>
              <Col>
                <div>
                  <Telephone size={18} color="dark" />
                  <span
                    className="ms-2 text-dark"
                    style={{ fontSize: '0.95rem' }}
                  >
                    03404 43-1287
                  </span>
                </div>
                <div>
                  <Whatsapp size={18} color="dark" />
                  <span
                    className="ms-2 text-dark"
                    style={{ fontSize: '0.95rem' }}
                  >
                    +54 3404 53-2864
                  </span>
                </div>
                <div>
                  <Envelope size={18} color="dark" />
                  <span
                    className="ms-2 text-dark"
                    style={{ fontSize: '0.95rem' }}
                  >
                    arcobalenopintureria@cegnet.com.ar
                  </span>
                </div>
              </Col>

              <Col>
                <Clock size={18} color="dark" />
                <span
                  className="ms-2 text-dark"
                  style={{ fontSize: '0.95rem' }}
                >
                  Horarios de atención:
                  <br />
                  <ul className="list-unstyled" style={{ marginLeft: '27px' }}>
                    <li>Lunes a Viernes: 8:00 - 12:00 / 15:30 - 19:30 hs.</li>
                    <li>Sábados: 8:00 - 12:00hs</li>
                  </ul>
                </span>
              </Col>
            </Row>
          </section>
          <hr className="mt-1 mb-4" />
          <section>
            <h5 className="mb-3 text-primary">Formulario de contacto</h5>
            <p style={{ fontSize: '0.9rem' }}>
              Estamos a tu disposición por cualquier inquietud o consulta que
              tengas. Por favor, Completá el formulario y serás contactado a la
              brevedad.
            </p>
            <Form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              validated={validated}
            >
              <Row>
                <TextField
                  label="Nombre"
                  name="name"
                  required
                  register={register}
                  size={12}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  errorText="El formato del email no es correcto"
                  regExPattern={
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  }
                  register={register}
                />
                <TextField label="Teléfono" name="phone" register={register} />
                <TextField
                  label="Mensaje"
                  name="message"
                  type="textarea"
                  required
                  register={register}
                  size={12}
                />
                <Row className="my-2">
                  <Col>
                    <span className="text-danger">* Campos requeridos</span>
                  </Col>
                </Row>
                <Col>
                  <Button
                    className="w-100 mt-1 text-light fw-bold ls-wider"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
