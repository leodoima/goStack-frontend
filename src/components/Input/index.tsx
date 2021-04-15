import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

/** Extensão faz com que o elemento receba todos os atributos padrões do input */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string /** Obriga informarmos um name para o input */;
  icon?: React.ComponentType<IconBaseProps> /** Icone opcional e recebe propriedades de um ícone */;
}

/** icon é definido com um Icon (maiúsculo) porque o React não reconhece como componente se for em letra minúscula */
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  /** Para exibição do ícone é feita uma verificação se o mesmo existe, uma vez que é item ipcional */
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);
export default Input;
