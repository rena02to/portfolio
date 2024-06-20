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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
    const { t } = useTranslation();
    const [ submitting, setSubmitting ] = useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t('contact.errors.mandatory')),
        email: Yup.string().email(t('contact.errors.email')).required(t('contact.errors.mandatory')),
        subject: Yup.string().required(t('contact.errors.mandatory')),
        message: Yup.string().required(t('contact.errors.mandatory')),
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
            toast.success(t('contact.success'));
            resetForm();
        }, (error) => {
            toast.error(t('contact.error'));
            console.log(error);
        })
        .finally(() => {
            setSubmitting(false);
        });
    }

    return(
        <section className={style.contact} id='contact'>
            <h2>{t('contact.contact')}</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ resetForm, isValid, dirty }) => (
                    <Form>
                        <div className={style.title}>
                            <h3>{t('contact.title')}</h3>
                            <p><span>*</span>{t('contact.mandatory')}</p>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="name">{t('contact.inputs.name')}<span>*</span></label>
                            <div className={style.input}>
                                <FaUserTie/>
                                <Field type="text" name="name" id='name' placeholder={t('contact.placeholders.name')} required/>
                            </div>
                            <ErrorMessage className={style.error} name='name' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <div className={style.input}>
                                <IoMail/>
                                <Field type="email" name="email" id="email" placeholder={t('contact.placeholders.email')} required/>
                            </div>
                            <ErrorMessage className={style.error} name='email' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="subject">{t('contact.inputs.subject')}<span>*</span></label>
                            <div className={style.input}>
                                <FaFileCircleQuestion/>
                                <Field type="text" name="subject" id='subject' placeholder={t('contact.placeholders.subject')} required/>
                            </div>
                            <ErrorMessage className={style.error} name='subject' component="p"/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="message">{t('contact.inputs.message')}<span>*</span></label>
                            <div className={style.input}>
                                <RiQuestionAnswerFill/>
                                <Field as="textarea" name="message" id="message" placeholder={t('contact.placeholders.message')} required/>
                            </div>
                            <ErrorMessage className={style.error} name='message' component="p"/>
                        </div>

                        <div className={style.buttons}>
                            <button type="submit" className={style.submit} disabled={!isValid || !dirty || submitting}>
                                {submitting ?
                                    <>
                                        <RiLoader2Line className={style.sendicon}/>
                                        <p className={style.load}>{t('contact.sending')}</p>
                                    </>
                                    :
                                    <>
                                        <IoIosSend/>
                                        <p>{t('contact.send')}</p>
                                    </>
                                }
                            </button>
                            <button type="reset" className={style.reset} disabled={!dirty || submitting} onClick={() => resetForm}>
                                <PiBroom/>
                                <p>{t('contact.clear')}</p>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}