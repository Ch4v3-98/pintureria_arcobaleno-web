import { Container, Col, Row, Stack, Form, Button } from 'react-bootstrap';
import TextField from '../components/TextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Heading } from '../components/Heading';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type LoginFields = {
  name: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginFields>();

  const navigate = useNavigate();

  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    const { name, password } = data;

    login({ name, password });

    navigate('/');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} className="">
          <Stack className="p-4">
            <Heading className="h5 m-0">Iniciar sesión</Heading>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Usuario"
                name="name"
                type="text"
                required
                register={register}
              />
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                required
                register={register}
              />
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted">
                  <span className="text-danger">*</span> Campos requeridos
                </span>
                <Button type="submit" className="btn btn-primary w-50">
                  <span className="text-light">Iniciar sesión</span>
                </Button>
              </div>
            </Form>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
