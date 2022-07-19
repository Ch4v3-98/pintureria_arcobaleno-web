import { useRef, useState } from 'react';
import {
  Button,
  Overlay,
  Popover,
  PopoverBody,
  Form,
  FormControl,
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export function SearchButton() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="d-lg-none">
      <Button
        variant="outline-light"
        className="rounded-circle"
        style={{ width: '3rem', height: '3rem' }}
        ref={target}
        onClick={() => setShow(!show)}
      >
        <Icon.Search size={20} />
      </Button>
      <Overlay
        target={target.current}
        show={show}
        placement="bottom"
        containerPadding={-0.2}
        rootClose
        onHide={() => setShow(false)}
      >
        {(props) => (
          <Popover
            {...props}
            style={{
              width: '100%',
              minWidth: '100%',
              border: '1px solid #e9ecef',
              ...props.style,
            }}
          >
            <PopoverBody className="p-3">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className=""
                  aria-label="Search"
                />
                <Button
                  variant=""
                  className="bg-secondary rounded-0 rounded-end"
                >
                  <Icon.Search className="text-light" size={22} />
                </Button>
              </Form>
            </PopoverBody>
          </Popover>
        )}
      </Overlay>
    </div>
  );
}
