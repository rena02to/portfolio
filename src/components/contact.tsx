import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaFileCircleQuestion, FaUserTie } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { RiLoader2Line, RiQuestionAnswerFill } from 'react-icons/ri';
import { useState } from 'react';
import { PiBroom } from 'react-icons/pi';
import { IoIosSend } from 'react-icons/io';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();
    const [ submitting, setSubmitting ] = useState(false);
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

    const handleSubmit = async(values: any, {resetForm}:any ) => {
        setSubmitting(true);
        emailjs.send(
            'service_ay9wy8e',
            'template_wz4rv4k',
            {
                subject: values.subject,
                from_name: values.name,
                from_email: values.email,
                message: values.message,
            },
            'eviXOsPjXHdpw_97H'
        )
        .then(() => {
            alert();
        }, (error) => {
            alert();
            console.log(error);
        })
        .finally(() => {
            setSubmitting(false);
            //resetForm();
        });
    }

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
                            <button type="submit" className={style.submit} disabled={!isValid || !dirty || submitting}>
                                {submitting ?
                                    <>
                                        <RiLoader2Line className={style.sendicon}/>
                                        <p className={style.load}>Enviando</p>
                                    </>
                                    :
                                    <>
                                        <IoIosSend/>
                                        <p>Enviar</p>
                                    </>
                                }
                            </button>
                            <button type="reset" className={style.reset} disabled={!dirty || submitting} onClick={() => resetForm}>
                                <PiBroom/>
                                <p>Limpar</p>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}