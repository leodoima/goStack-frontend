import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string /** Irá permitir estilização como forma de herança, ou seja,
                        além do próprio style, há outros pontos em que poderemos atualizar */;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
