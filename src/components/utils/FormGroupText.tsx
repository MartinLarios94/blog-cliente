import {Field, ErrorMessage} from 'formik'
import MostarErrorCampo from './MostarErrorCampo'

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
      <Field name={props.campo} className="form-control" />
      <ErrorMessage name={props.campo}>
        {mensaje => <MostarErrorCampo mensaje={mensaje}/>}
      </ErrorMessage>
    </div>
  );
}

interface formGroupTextProps{
    campo: string;
    label?: string;
    placeholder?: string
}
