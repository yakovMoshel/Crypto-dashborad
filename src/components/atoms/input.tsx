import  {InputProps} from '../../domain/models/models';

export default function Input({ id, name, type, ...props }: InputProps) {
  return <input id={id} name={name || id} type={type} {...props} />;
}
