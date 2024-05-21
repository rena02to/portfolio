import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import { FaUserTie } from 'react-icons/fa6';

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
                            <input type="text" id='name' placeholder='Digite aqui seu nome e sobrenome'/>
                            <ErrorMessage name='name'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <input type="email" name="email" id="email" placeholder='Digite aqui seu e-mail'/>
                            <ErrorMessage name='email'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="subject">Assunto<span>*</span></label>
                            <input type="text" id='subject' placeholder='Digite aqui o assunto'/>
                            <ErrorMessage name='subject'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="message">Mensagem<span>*</span></label>
                            <textarea name="message" id="message" placeholder='Digite aqui a mensagem'/>
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