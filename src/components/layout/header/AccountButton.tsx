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
import { useAuth } from '../../../context/AuthContext';

export function AccountButton() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const { user, logout } = useAuth();

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
            <ListGroup variant="flush">
              {!user && (
                <ListGroup.Item
                  action
                  as={Link}
                  to="/login"
                  onClick={() => setShow(false)}
                >
                  Ingresar
                </ListGroup.Item>
              )}
              {user && (
                <ListGroup.Item
                  action
                  onClick={() => {
                    logout();
                    setShow(false);
                  }}
                >
                  Cerrar sesión
                </ListGroup.Item>
              )}
            </ListGroup>
          </PopoverBody>
        </Popover>
      </Overlay>
    </>
  );
}
