import React from 'react';
import './FormularioContato.css';
import ContatoImg from '../../assets/email.jpg';
import BannerPD from '../../components/BannerPD';
import FormContato from '../../components/FormContato';

const FormularioContato = () => {
    return (
        <>
            <BannerPD img={ContatoImg} titulo={'Entre em Contato Conosco'} />
            <FormContato />
        </>
    );
}

export default FormularioContato;
