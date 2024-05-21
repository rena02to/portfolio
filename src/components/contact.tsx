import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';

export default function Contact(){
    const initialValues = {};
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isClearing, setIsClearing ] = useState(false);

    const handleSubmit = () => {}

    return(
        <section className={style.contact} id='contact'>
            <h2>Contate-me</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className={style.title}>
                            <h3>Formulário de contato</h3>
                            <p><span>*</span> Indica um campo de preenchimento obrigatório</p>
                        </div>

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

                        <div className={style.buttons}>
                            <button type="submit" className={style.submit} disabled={!isSubmitting}>Enviar</button>
                            <button type="reset" className={style.reset} disabled={!isClearing}>Limpar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}