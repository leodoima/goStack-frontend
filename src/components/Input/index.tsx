import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**
   * Utilizaremos Callback para evitar que o sistema recrie a função toda vez que o componente for acionado
   * Isso acontece sempre que utilizamos function dentro de um componente.
   * Os colchetes fazem com que a função somente seja acionada quando as variáveis dentro dela sejam alteradas, estando vazias, são criadas apenas uma vez
   */
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    /** Transforma conteúdo em boolean e verifica se campo do input possui valor */
    setIsFilled(!!inputRef.current?.value);
  }, []);

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
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error}
    </Container>
  );
};
export default Input;
