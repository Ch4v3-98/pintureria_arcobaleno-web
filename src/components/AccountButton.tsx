import { useRef, useState } from 'react';
import {
  Button,
  ListGroup,
  Overlay,
  Popover,
  PopoverBody,
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export function AccountButton() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        variant="outline-light"
        className="rounded-circle text-light p-3"
        // style={{ width: '3rem', height: '3rem' }}
        ref={target}
        onClick={() => setShow(!show)}
      >
        <Icon.Person size={23} />
      </Button>
      <Overlay
        rootClose
        target={target.current}
        show={show}
        placement="bottom"
        onHide={() => setShow(false)}
      >
        <Popover>
          <PopoverBody className="p-1">
            <ListGroup>
              <ListGroup.Item
                action
                as={Link}
                to="/contacto"
                onClick={() => setShow(false)}
              >
                Mi Cuenta
              </ListGroup.Item>
              <ListGroup.Item
                action
                as={Link}
                to="/contacto"
                onClick={() => setShow(false)}
              >
                Cerrar Sesion
              </ListGroup.Item>
            </ListGroup>
          </PopoverBody>
        </Popover>
      </Overlay>
    </>
  );
}
