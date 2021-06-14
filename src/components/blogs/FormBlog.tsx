import { Form, Formik, FormikHelpers } from 'formik';
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Button';
import { blogDTO } from '../../models/blog.model';
import * as Yup from 'yup';

export default function FormBlog(props: formBlogProps) {
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                Title: Yup.string().required("Este campo es requerido"),
                Excerpt: Yup.string().required("Este campo es requerido"),
                Author: Yup.string().required("Este campo es requerido"),
                Tag: Yup.string().required("Este campo es requerido")
              })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText 
                        campo="Title" label="Titulo"
                    />
                    <FormGroupText 
                        campo="Excerpt" label="Titulo"
                    />
                    <FormGroupText 
                        campo="Author" label="Titulo"
                    />
                    <FormGroupText 
                        campo="Tag" label="Titulo"
                    />
                    <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
                    <Button type="button">Cancelar</Button>
                </Form>
            )}
        </Formik>
    )
}

interface formBlogProps{
    modelo: blogDTO;
    onSubmit(valores: blogDTO, acciones: FormikHelpers<blogDTO>): void;
}