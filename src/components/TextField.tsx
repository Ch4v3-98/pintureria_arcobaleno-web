import { FieldErrorsImpl, Path, UseFormRegister } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

interface TextFieldProps {
  name: string;
  label: Path<any>;
  type?: string;
  regExPattern?: RegExp;
  minLenght?: number;
  maxLenght?: number;
  min?: number;
  max?: number;
  required?: boolean;
  errorText?: string;
  disabled?: boolean;
  readonly?: boolean;
  register: UseFormRegister<any>;
  error?: FieldErrorsImpl;
  size?: number;
}

function TextField({
  name,
  label,
  type = 'text',
  regExPattern,
  required = false,
  errorText = 'Este campo es requerido',
  disabled = false,
  readonly = false,
  minLenght,
  maxLenght,
  min,
  max,
  register,
  error,
  size,
}: TextFieldProps) {
  const validations = {
    required: {
      value: required,
      message: errorText,
    },
    pattern: regExPattern && {
      value: regExPattern,
      message: 'El formato del campo no es correcto',
    },
    minLength: minLenght && {
      value: minLenght,
      message: `El campo debe tener al menos ${minLenght} caracteres`,
    },
    maxLength: maxLenght && {
      value: maxLenght,
      message: `El campo debe tener como máximo ${maxLenght} caracteres`,
    },
    min: min && {
      value: min,
      message: `El campo debe tener como mínimo ${min}`,
    },
    max: max && {
      value: max,
      message: `El campo debe tener como máximo ${max}`,
    },
  };

  return (
    <Form.Group
      as={Col}
      md={size}
      controlId={`formGroup-${label}`}
      className="mb-4"
    >
      <Form.Label className=" fw-bold mb-0">
        {label}
        <span className="text-danger">{required && '  *'}</span>
      </Form.Label>
      {type === 'textarea' ? (
        <Form.Control
          as={type}
          type="textarea"
          readOnly={readonly}
          disabled={disabled}
          isInvalid={!!error}
          {...register(name, validations)}
        />
      ) : (
        <Form.Control
          type={type}
          readOnly={readonly}
          disabled={disabled}
          isInvalid={!!error}
          {...register(name, validations)}
          //   className=" border border-0 border-bottom border-3"
        />
      )}

      <Form.Control.Feedback type="invalid">
        {error && `${error.message}`}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextField;
