import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { BsTrash3Fill } from 'react-icons/bs';
import { FaFileCircleQuestion, FaUserTie } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { TiUpload } from 'react-icons/ti';

export default function Contact(){
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isClearing, setIsClearing ] = useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
        subject: Yup.string().required('Campo obrigatório'),
        message: Yup.string().required('Campo obrigatório'),
    });
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const handleReset = (resetForm : any) => {
        resetForm();
    }

    const handleSubmit = () => {}

    return(
        <section className={style.contact} id='contact'>
            <h2>Contate-me</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ resetForm, isValid, dirty }) => (
                    <Form>
                        <div className={style.title}>
                            <h3>Formulário de contato</h3>
                            <p><span>*</span> Indica um campo de preenchimento obrigatório</p>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="name">Nome e sobrenome <span>*</span></label>
                            <div className={style.input}>
                                <FaUserTie/>
                                <Field type="text" name="name" id='name' placeholder='Digite aqui seu nome e sobrenome' required/>
                            </div>
                            <ErrorMessage className={style.error} name='name' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <div className={style.input}>
                                <IoMail/>
                                <Field type="email" name="email" id="email" placeholder='Digite aqui seu e-mail' required/>
                            </div>
                            <ErrorMessage className={style.error} name='email' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="subject">Assunto<span>*</span></label>
                            <div className={style.input}>
                                <FaFileCircleQuestion/>
                                <Field type="text" name="subject" id='subject' placeholder='Digite aqui o assunto' required/>
                            </div>
                            <ErrorMessage className={style.error} name='subject' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="message">Mensagem<span>*</span></label>
                            <div className={style.input}>
                                <RiQuestionAnswerFill/>
                                <Field as="textarea" name="message" id="message" placeholder='Digite aqui a mensagem' required/>
                            </div>
                            <ErrorMessage className={style.error} name='message' component="p"/>
                        </div>

                        <div className={style.buttons}>
                            <button type="submit" className={style.submit} disabled={!isValid || !dirty}>Enviar</button>
                            <button type="reset" className={style.reset} disabled={!dirty} onClick={() => handleReset(resetForm)}>Limpar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}