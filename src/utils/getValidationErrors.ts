import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
  /** Indicando que a chave pode ser qualquer string que receberá uma string */
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  /** Percorre array de erros */
  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
