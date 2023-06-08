import React from 'react';
import './Formulario.css';
import InscrevaseImg from '../../assets/doacao.jpg';
import BannerPD from '../../components/BannerPD';
import Formulario from '../../components/Formulario';

const FormularioInscrever = () => {
    return (
        <>
            <BannerPD img={InscrevaseImg} titulo={'Inscreva-se'} />
            <Formulario />
        </>
    );
}

export default FormularioInscrever;
