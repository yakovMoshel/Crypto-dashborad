import React from 'react';
import  {LabelProps} from '../../domain/models/models';

export default function Label({ htmlFor, children }: LabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
