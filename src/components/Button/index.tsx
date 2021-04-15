import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/** Uma forma de receber todos os atributos padrões de um botão.
 * Neste caso o ESLint transforma uma interface em um type, uma vez que não estamos alterando nenhum atributo do button
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** Children: carregará o conteúdo do botão
 * Rest: carregará as demais propriedades
 */
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
