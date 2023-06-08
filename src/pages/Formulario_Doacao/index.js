import React from 'react';
import './FormularioDoacao.css';
import InscrevaseImg from '../../assets/doacao.jpg';
import BannerPD from '../../components/BannerPD';
import FormDoacao from '../../components/FormDoação';

const FormularioDoacao = () => {
    return (
        <>
            <BannerPD img={InscrevaseImg} titulo={'Realize sua Doação'} />
            <FormDoacao />
        </>
    );
}

export default FormularioDoacao;
