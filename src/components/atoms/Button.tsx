import React from 'react'
import { ButtonProps } from '../../domain/models/models';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}