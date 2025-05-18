import React from 'react';
import  {LabelProps} from '../../domain/models/models';

export default function Label({ htmlFor, children,...props }: LabelProps) {
  return <label htmlFor={htmlFor} {...props}>{children}</label>;
}
