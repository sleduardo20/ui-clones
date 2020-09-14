import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
  content: any;
};

const DropdownOption: React.FC<ButtonProps> = ({
  name,
  content: Content,
  ...rest
}) => {
  return (
    <Container type="button" className="dropdown-option" {...rest}>
      {name}
    </Container>
  );
};

export default DropdownOption;
