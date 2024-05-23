import style from '@/styles/contact.module.scss'; 
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { BsTrash3Fill } from 'react-icons/bs';
import { FaFileCircleQuestion, FaUserTie } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { TiUpload } from 'react-icons/ti';

export default function Contact(){
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isClearing, setIsClearing ] = useState(false);
    const [ attach, setAttach ] = useState(false);
    const [ file, setFile ] = useState<File | null>(null);
    const [ attached, setAttached ] = useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
        subject: Yup.string().required('Campo obrigatório'),
        message: Yup.string().required('Campo obrigatório'),
        yesorno: Yup.string().required('Campo obrigatório'),
        // file: Yup.mixed().when('yesorno', {
        //     is: 'yes',
        //     then: Yup.mixed().required('Arquivo é obrigatório'),
        //     otherwise: Yup.mixed().notRequired(),
        // }),
    });
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
        yesorno: 'no',
        file: '',
    };

    const handleUpload = (event: any) => {
        let fileinput =  event.target.files[0];
        if(fileinput){
            setFile(fileinput);
            setAttached(true);
        }
    }
    
    const handleDeleteFile = () => {
        const inputFile = document.getElementById('file') as HTMLInputElement;
        if(inputFile){
            inputFile.value = '';
        }
        setFile(null);
        setAttached(false);
    }

    const handleReset = (resetForm : any) => {
        resetForm();
        setFile(null);
        setAttached(false);
        setAttach(false);
    }

    const handleSubmit = () => {}

    return(
        <section className={style.contact} id='contact'>
            <h2>Contate-me</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ resetForm, values }) => (
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
                            <ErrorMessage className={style.error} name='name'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="email">E-mail<span>*</span></label>
                            <div className={style.input}>
                                <IoMail/>
                                <Field type="email" name="email" id="email" placeholder='Digite aqui seu e-mail' required/>
                            </div>
                            <ErrorMessage className={style.error} name='email'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="subject">Assunto<span>*</span></label>
                            <div className={style.input}>
                                <FaFileCircleQuestion/>
                                <Field type="text" name="subject" id='subject' placeholder='Digite aqui o assunto' required/>
                            </div>
                            <ErrorMessage className={style.error} name='subject'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="message">Mensagem<span>*</span></label>
                            <div className={style.input}>
                                <RiQuestionAnswerFill/>
                                <Field as="textarea" name="message" id="message" placeholder='Digite aqui a mensagem' required/>
                            </div>
                            <ErrorMessage className={style.error} name='message'/>
                        </div>

                        <div className={style.inputbox}>
                            <label htmlFor="file">Gostaria de anexar algum arquivo?</label>
                            <div className={style.inputradio}>
                                <label className={style.radio}>
                                    <Field type="radio" name="yesorno" value="yes" onClick={() => setAttach(true)}/>
                                    <p>Sim</p>
                                </label>
                                <label className={style.radio}>
                                    <Field type="radio" name="yesorno" value="no" onClick={() => setAttach(false)}/>
                                    <p>Não</p>
                                </label>
                            </div>
                            {attach ? 
                                <>
                                    <div className={style.box}>
                                        <div className={style.inputboxfile}>
                                            <Field className={style.inputfile} type="file" name="file" id="file" accept=".pdf, .jpg, .jpeg, .txt" onChange={handleUpload} required={attach}/>
                                            <label htmlFor='file' className={!attached ? style.pseudoinput : style.pseudoinputup}>
                                                <p>{file === null ? "Encontrar no dispositivo" : file.name}</p>
                                                <TiUpload/>
                                            </label>
                                        </div>
                                        <button type="button" title="Remover arquivo" disabled={attached ? false : true} onClick={handleDeleteFile}><BsTrash3Fill/></button>
                                    </div>
                                    <ErrorMessage className={style.error} name='file'/>
                                </>
                                :
                                null
                            }
                            <ErrorMessage className={style.error} name='yesorno'/>
                        </div>

                        <div className={style.buttons}>
                            <button type="submit" className={style.submit} disabled={isSubmitting}>Enviar</button>
                            <button type="reset" className={style.reset} disabled={isClearing} onClick={() => handleReset(resetForm)}>Limpar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}