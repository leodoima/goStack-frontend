import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

/** Extensão faz com que o elemento receba todos os atributos padrões do input */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string /** Obriga informarmos um name para o input */;
  icon?: React.ComponentType<IconBaseProps> /** Icone opcional e recebe propriedades de um ícone */;
}

/** icon é definido com um Icon (maiúsculo) porque o React não reconhece como componente se for em letra minúscula */
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]); // não se faz necessário declarar a ref neste ponto

  return (
    /**
     * Icon: Para exibição do ícone é feita uma verificação se o mesmo existe, uma vez que é item opcional
     * Ref: Trata-se do uso do unform
     */
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};
export default Input;
