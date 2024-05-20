import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';

export default function Contact(){
    const initialValues = {};
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleSubmit = () => {}

    return(
        <section className={style.contact} id='contact'>
            <h2>Contate-me</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <h3>Formulário de contato</h3>

                        <div className={style.inputbox}>
                            <label htmlFor="name">Nome e sobrenome<span>*</span></label>
                            <input type="text" id='name'/>
                            <ErrorMessage name='name'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <input type="email" name="email" id="email"/>
                            <ErrorMessage name='email'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="subject">Assunto<span>*</span></label>
                            <input type="text" id='subject'/>
                            <ErrorMessage name='subject'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="message">Mensagem<span>*</span></label>
                            <textarea name="message" id="message"/>
                            <ErrorMessage name='message'/>
                        </div>

                        <button type="submit" disabled={!isSubmitting}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}