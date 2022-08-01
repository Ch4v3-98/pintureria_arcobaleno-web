import { Heading } from '../components/Heading';
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

function RefundPolicies() {
  return (
    <Container className="my-3 my-lg-5">
      <Row>
        <Sidebar />
        <Col>
          <Heading className="h3">Política de Devolución</Heading>
          <article>
            <section className="mb-4">
              <h5 className="text-primary">
                ¿CUÁNTO TIEMPO TENGO PARA HACER UN CAMBIO?
              </h5>
              <p>
                Tenés hasta 7 (siete) días consecutivos desde la recepción del
                producto para realizar el cambio deseado. El producto adquirido
                debe presentar las mismas condiciones en las que fue recibido o
                comprado, en perfectas condiciones y envase original. Para hacer
                efectivo el cambio es obligatorio llevar la factura impresa.
              </p>
            </section>
            <section className="mb-4">
              <h5 className="text-primary">¿REALIZAR UN CAMBIO TIENE COSTO?</h5>
              <p>
                Los cambios de los productos son gratuitos sin incluir el costo
                del envío de los mismos. Si el motivo del cambio es un error de
                despacho, el mismo no tendrá un costo asociado.
              </p>
            </section>
            <section className="mb-4">
              <h5 className="text-primary">
                ALGO QUE COMPRÉ NO ME SATISFACE UN 100%, ¿PUEDO CAMBIARLO?
              </h5>
              <p>
                Sí. Todo lo que compres podés cambiar a menos que se trate de
                productos identificados como OPORTUNIDAD cuyos cambios estarán
                condicionados a disponibilidad de stock. En caso de querer
                cambiar por otro producto, podrás hacerlo eligiendo cualquier
                artículo de los que estén en el local. Si el nuevo producto
                elegido tiene un costo mayor, se te cobrará la diferencia
                correspondiente. Tené en cuenta que no se realiza devolución de
                dinero.
              </p>
            </section>
            <section className="mb-4">
              <h5 className="text-primary">
                ¿QUÉ PASA SI RECIBO EL PRODUCTO Y ME ARREPIENTO DE MI COMPRA?
              </h5>
              <p>
                El usuario tendrá derecho a devolver los productos adquiridos en
                el Sitio web, durante el plazo 7 (siete) días corridos, contados
                a partir de la entrega del producto en el domicilio indicado por
                el usuario, sin responsabilidad alguna. ¿QUÉ PASA SI EL PRODUCTO
                TIENE UNA FALLA? Si el producto llegara a presentar una falla de
                fabricación, deberás ponerte en contacto con nosotros al mail
                informando el número del pedido y el producto fallado, para que
                podamos indicarte los pasos a seguir.
              </p>
            </section>
            <section className="mb-4">
              <h5 className="text-primary">
                ¿QUÉ PASA SI RECIBO EL PRODUCTO Y ME ARREPIENTO DE MI COMPRA?
              </h5>
              <p>
                El usuario tendrá derecho a devolver los productos adquiridos en
                el Sitio web, durante el plazo 7 (siete) días corridos, contados
                a partir de la entrega del producto en el domicilio indicado por
                el usuario, sin responsabilidad alguna.
              </p>
            </section>
            <section className="mb-4">
              <h5 className="text-primary">
                ¿QUÉ PASA SI EL PRODUCTO TIENE UNA FALLA?
              </h5>
              <p>
                Si el producto llegara a presentar una falla de fabricación,
                deberás ponerte en contacto con nosotros al mail informando el
                número del pedido y el producto fallado, para que podamos
                indicarte los pasos a seguir.
              </p>
            </section>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default RefundPolicies;
