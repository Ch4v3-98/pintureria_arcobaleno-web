import { useRef, useState } from 'react';
import {
  Button,
  Overlay,
  Popover,
  PopoverBody,
  FormControl,
  InputGroup,
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
        <Icon.Search size={20} color="white" />
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
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className=""
                  aria-label="Search"
                />
                <Button
                  className="bg-secondary rounded-0 rounded-end p-2"
                  style={{ width: '100px' }}
                >
                  <Icon.Search className="text-light" />
                </Button>
              </InputGroup>
            </PopoverBody>
          </Popover>
        )}
      </Overlay>
    </div>
  );
}
