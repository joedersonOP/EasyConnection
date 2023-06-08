import React, { useState } from 'react';
import './FormContato.css';
import '../CampoTexto/CampoTexto.css';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SweetAlert from '../SweetAlert';

const FormContato = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleFormSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            setShowAlert(true);
        }
    };

    const schema = yup.object({
        nome: yup.string().required('O nome é obrigatório'),
        email: yup.string().email().required('O email é obrigatório'),
        mensagem: yup.string().required('A mensagem é obrigatória'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    return (
        <div className="form_contato my-5">
            {showAlert && (
                <SweetAlert
                    titulo="Tudo Certo!"
                    mensagem="Seu email foi enviado com sucesso!"
                    icone="success"
                    onClose={() => setShowAlert(false)}
                />
            )}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-logo"></div>
                <div className="form-title">CONTATO</div>
                <div className="inputs form_group">

                    <div className="campo_texto field">
                        <input type='text' className="campo_texto__field" placeholder='Nome' name='nome' id='nome' required {...register('nome')} />
                        <label htmlFor='nome' className="campo_texto__label">Nome</label>
                    </div>
                    {errors.nome ? <span className="error">{errors.nome.message}</span> : null}

                    <div className="campo_texto field">
                        <input type='email' className="campo_texto__field" placeholder='Email' name='email' id='email' required {...register('email')} />
                        <label htmlFor='email' className="campo_texto__label">Email</label>
                    </div>
                    {errors.email ? <span className="error">{errors.email.message}</span> : null}

                    <div className="campo_texto field">
                        <textarea className="campo_texto__field" rows='6' placeholder='Mensagem' name='mensagem' id='mensagem' required {...register('mensagem')}></textarea>
                        <label htmlFor='mensagem' className="campo_texto__label">Mensagem</label>
                    </div>
                    {errors.mensagem ? <span className="error">{errors.mensagem.message}</span> : null}

                </div>
                <input className='form-button' type="submit" value='ENVIAR' />
            </form>
        </div>
    );
}

export default FormContato;