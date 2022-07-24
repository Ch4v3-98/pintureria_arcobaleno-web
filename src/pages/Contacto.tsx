import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import FieldText from '../components/FieldText';
import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';

interface ContactoInputs {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactoInputs>();

  const [validated, setValidated] = useState(false);

  console.log(errors);

  const onSubmit: SubmitHandler<ContactoInputs> = (data) => {
    console.log(data);
    setValidated(true);
  };

  return (
    <Container className="my-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">¿Tenés alguna duda o consulta?</Heading>
          <Form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            validated={validated}
          >
            <Row>
              <FieldText label="Nombre" register={register} />
              <FieldText
                label="Email"
                type="email"
                required
                errorText="El formato del email no es correcto"
                regExPattern={
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                }
                register={register}
              />
              <FieldText label="Teléfono" register={register} />
              <FieldText
                label="Mensaje"
                type="textarea"
                required
                minLenght={3}
                register={register}
              />
              <Button
                className="mt-1 text-light fw-bold ls-wider"
                type="submit"
              >
                Enviar
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
