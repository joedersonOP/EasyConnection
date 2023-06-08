import React, { useState } from 'react';
import './Formulario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCity, faIdCard, faLocationDot, faMapLocationDot, faRoad, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import SweetAlert from '../SweetAlert';

const Formulario = () => {

    const [showAlert, setShowAlert] = useState(false);

    const [isCnpjSelected, setIsCnpjSelected] = useState(true);

    const schema_doador = yup.object({
        nome_doador: yup.string().required('O nome é obrigatório'),
        email_doador: yup.string().email().required('O email é obrigatório'),
        cep_doador: yup.string().min(8, "O cep deve ter no mínimo 8 caracteres").max(9, "O cep deve ter no máximo 9 caracteres")
            .required('O cep é obrigatório'),
        logradouro_doador: yup.string().required('O logradouro é obrigatório'),
        numero_doador: yup.number().integer().typeError('O número é obrigatório').required('O numero é obrigatório'),
        bairro_doador: yup.string().required('O bairro é obrigatório'),
        uf_doador: yup.string().required('A uf é obrigatória'),
        localidade_doador: yup.string().required('A cidade é obrigatória'),
    });

    const { register: registerDoador, handleSubmit: handleSubmitDoador, formState: { errors: errorsDoador } } = useForm({ resolver: yupResolver(schema_doador) });

    const handleFormSubmitDoador = (data) => {
        if (Object.keys(errorsDoador).length === 0) {
            setShowAlert(true);
        }
    };

    const schema_requisitante = yup.object({
        nome_requisitante: yup.string().required('O nome é obrigatório'),
        email_requisitante: yup.string().email().required('O email é obrigatório'),
        cep_requisitante: yup.string().min(8, "O cep deve ter no mínimo 8 caracteres").max(9, "O cep deve ter no máximo 9 caracteres")
            .required('O cep é obrigatório'),
        logradouro_requisitante: yup.string().required('O logradouro é obrigatório'),
        numero_requisitante: yup.number().integer().typeError('O número é obrigatório').required('O numero é obrigatório'),
        bairro_requisitante: yup.string().required('O bairro é obrigatório'),
        uf_requisitante: yup.string().required('A uf é obrigatória'),
        localidade_requisitante: yup.string().required('A cidade é obrigatória'),
    });



    const { register: registerRequisitante, handleSubmit: handleSubmitRequisitante, formState: { errors: errorsRequisitante } } = useForm({ resolver: yupResolver(schema_requisitante) })

    const handleFormSubmitRequisitante = (data) => {
        if (Object.keys(errorsRequisitante).length === 0) {
            setShowAlert(true);
        }
    };

    const handleCheckboxChange = () => {
        setIsCnpjSelected(!isCnpjSelected);
        console.log(isCnpjSelected);
    };

    const estados = [
        { value: 'AC' },
        { value: 'AL' },
        { value: 'AP' },
        { value: 'AM' },
        { value: 'BA' },
        { value: 'CE' },
        { value: 'DF' },
        { value: 'ES' },
        { value: 'GO' },
        { value: 'MA' },
        { value: 'MT' },
        { value: 'MS' },
        { value: 'MG' },
        { value: 'PA' },
        { value: 'PB' },
        { value: 'PR' },
        { value: 'PE' },
        { value: 'PI' },
        { value: 'RJ' },
        { value: 'RN' },
        { value: 'RS' },
        { value: 'RO' },
        { value: 'RR' },
        { value: 'SC' },
        { value: 'SP' },
        { value: 'SE' },
        { value: 'TO' }
    ];

    return (
        <>
            <div className="section mb-4">
                {showAlert && (
                    <SweetAlert
                        titulo="Parabéns!"
                        mensagem="Inscrição realizada com sucesso!"
                        icone="success"
                        onClose={() => setShowAlert(false)}
                    />
                )}
                <Row className='justify-content-center '>
                    <Col className="text-center align-self-center">
                        <div className="section text-center">
                            <h6 className="mb-0 pb-3">
                                <span>Doador </span>
                                <span>Requisitante</span>
                            </h6>
                            <input
                                className="checkbox"
                                type="checkbox"
                                id="reg-log"
                                name="reg-log"
                            />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Doador</h4>
                                                <div className="form-group">
                                                    <h5>Dados Pessoais</h5>
                                                </div>
                                                <form onSubmit={handleSubmitDoador(handleFormSubmitDoador)}>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="text"
                                                            name="nome_doador"
                                                            className="form-style"
                                                            placeholder="Nome"
                                                            id="nome_doador"
                                                            required
                                                            {...registerDoador('nome_doador')}
                                                        />
                                                        {errorsDoador.nome_doador ? <span className="error">{errorsDoador.nome_doador.message}</span> : null}
                                                        <FontAwesomeIcon icon={faUser} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="email_doador"
                                                            className="form-style"
                                                            placeholder="Email"
                                                            id="email_doador"
                                                            required
                                                            {...registerDoador('email_doador')}
                                                        />
                                                        {errorsDoador.email_doador ? <span className="error">{errorsDoador.email_doador.message}</span> : null}
                                                        <FontAwesomeIcon icon={faAt} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2 seletor d-flex">
                                                        <p>CPF</p>
                                                        <input
                                                            type="checkbox"
                                                            id="input_cpfcnpj"
                                                            checked={!isCnpjSelected}
                                                            name='inputIsCpf'
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="input_cpfcnpj"></label>
                                                        <p>CNPJ</p>
                                                    </div>
                                                    <div
                                                        className={`form-group mt-2 ${isCnpjSelected ? '' : 'd-none'
                                                            }`}
                                                    >
                                                        <input
                                                            type="text"
                                                            name="cpf_doador"
                                                            className="form-style"
                                                            placeholder="CPF"
                                                            id="cpf_doador"
                                                            {...registerDoador('cpf_doador')}
                                                        />
                                                        {errorsDoador.cpf_doador ? <span className="error">{errorsDoador.cpf_doador.message}</span> : null}
                                                        <FontAwesomeIcon icon={faIdCard} className='input-icon' />
                                                    </div>
                                                    <div
                                                        className={`form-group mt-2 ${isCnpjSelected ? 'd-none' : ''
                                                            }`}
                                                    >
                                                        <input
                                                            type="text"
                                                            name="cnpj_doador"
                                                            className="form-style"
                                                            placeholder="CNPJ"
                                                            id="cnpj_doador"
                                                            {...registerDoador('cnpj_doador')}
                                                        />
                                                        <FontAwesomeIcon icon={faIdCard} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <h5>Endereço</h5>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="cep_doador" className="form-style cep" placeholder="CEP" id="cep_doador" {...registerDoador('cep_doador')} required />
                                                        <select name="uf_doador" id='uf_doador' className="form-style uf" {...registerDoador('uf_doador')} required>
                                                            {estados.map(item => <option key={item.value}>{item.value}</option>)}
                                                        </select>
                                                        <FontAwesomeIcon icon={faLocationDot} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="logradouro_doador" className="form-style cep" placeholder="Logradouro" id="logradouro_doador" {...registerDoador('logradouro_doador')} required />
                                                        <FontAwesomeIcon icon={faRoad} className='input-icon' />
                                                        <input type="number" name="numero_doador" className="form-style uf" placeholder="Numero" id="numero_doador" {...registerDoador('numero_doador')} required />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="bairro_doador" className="form-style input-esquerda" placeholder="Bairro" id="bairro_doador" {...registerDoador('bairro_doador')} required />
                                                        <FontAwesomeIcon icon={faMapLocationDot} className='input-icon' />
                                                        <input type="text" name="localidade_doador" className="form-style input-direita" placeholder="Localidade" id="localidade_doador" {...registerDoador('localidade_doador')} required />
                                                        <FontAwesomeIcon icon={faCity} className='input-icon input-icon-left' />
                                                    </div>
                                                    <div className="form-group mt-2 ">
                                                        {errorsDoador.cep_doador ? <span className="error">{errorsDoador.cep_doador.message}</span> : null}
                                                        <br />
                                                        {errorsDoador.logradouro_doador ? <span className="error">{errorsDoador.logradouro_doador.message}</span> : null}
                                                        <br />
                                                        {errorsDoador.numero_doador ? <span className="error">{errorsDoador.numero_doador.message}</span> : null}
                                                        <br />
                                                        {errorsDoador.bairro_doador ? <span className="error">{errorsDoador.bairro_doador.message}</span> : null}
                                                        <br />
                                                        {errorsDoador.localidade_doador ? <span className="error">{errorsDoador.localidade_doador.message}</span> : null}
                                                    </div>
                                                    <button type="submit" className="btn mt-4">Inscreva-se</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Requisitante</h4>
                                                <div className="form-group">
                                                    <label>Dados Pessoais</label>
                                                </div>
                                                <form onSubmit={handleSubmitRequisitante(handleFormSubmitRequisitante)}>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="text"
                                                            name="nome_requisitante"
                                                            className="form-style"
                                                            placeholder="Nome"
                                                            id="nome_requisitante"
                                                            required
                                                            {...registerRequisitante('nome_requisitante')}
                                                        />
                                                        {errorsRequisitante.nome_requisitante ? <span className="error">{errorsRequisitante.nome_requisitante.message}</span> : null}
                                                        <FontAwesomeIcon icon={faUser} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="email_requisitante"
                                                            className="form-style"
                                                            placeholder="Email"
                                                            id="email_requisitante"
                                                            required
                                                            {...registerRequisitante('email_requisitante')}
                                                        />
                                                        {errorsRequisitante.email_requisitante ? <span className="error">{errorsRequisitante.email_requisitante.message}</span> : null}
                                                        <FontAwesomeIcon icon={faAt} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2 seletor d-flex">
                                                        <p>CPF</p>
                                                        <input
                                                            type="checkbox"
                                                            id="input_cpfcnpj"
                                                            checked={!isCnpjSelected}
                                                            onChange={handleCheckboxChange}
                                                            name='inputIsCpfReq'
                                                        />
                                                        <label htmlFor="input_cpfcnpj"></label>
                                                        <p>CNPJ</p>
                                                    </div>
                                                    <div
                                                        className={`form-group mt-2 ${isCnpjSelected ? '' : 'd-none'
                                                            }`}
                                                    >
                                                        <input
                                                            type="text"
                                                            name="cpf_requisitante"
                                                            className="form-style"
                                                            placeholder="CPF"
                                                            id="cpf_requisitante"
                                                            {...registerRequisitante('cpf_requisitante')}
                                                        />
                                                        {errorsRequisitante.cpf_requisitante ? <span className="error">{errorsRequisitante.cpf_requisitante.message}</span> : null}
                                                        <FontAwesomeIcon icon={faIdCard} className='input-icon' />
                                                    </div>
                                                    <div
                                                        className={`form-group mt-2 ${isCnpjSelected ? 'd-none' : ''
                                                            }`}
                                                    >
                                                        <input
                                                            type="text"
                                                            name="cnpj_requisitante"
                                                            className="form-style"
                                                            placeholder="CNPJ"
                                                            id="cnpj_requisitante"
                                                            {...registerRequisitante('cnpj_requisitante')}
                                                        />
                                                        {errorsRequisitante.cnpj_requisitante ? <span className="error">{errorsRequisitante.cnpj_requisitante.message}</span> : null}
                                                        <FontAwesomeIcon icon={faIdCard} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <h5>Endereço</h5>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="cep_requisitante" className="form-style cep" placeholder="CEP" id="cep_requisitante" {...registerRequisitante('cep_requisitante')} required />
                                                        <i className="input-icon uil uil-user"></i>
                                                        <select name="uf_requisitante" id='uf_requisitante' className="form-style uf" {...registerRequisitante('uf_requisitante')} required>
                                                            {estados.map(item => <option key={item.value}>{item.value}</option>)}
                                                        </select>
                                                        <FontAwesomeIcon icon={faLocationDot} className='input-icon' />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="logradouro_requisitante" className="form-style cep" placeholder="Logradouro" id="logradouro_requisitante" {...registerRequisitante('logradouro_requisitante')} required />
                                                        <FontAwesomeIcon icon={faRoad} className='input-icon' required />
                                                        <input type="number" name="numero_requisitante" className="form-style uf" placeholder="Numero" id="numero_requisitante" {...registerRequisitante('numero_requisitante')} required />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="bairro_requisitante" className="form-style input-esquerda" placeholder="Bairro" id="bairro_requisitante" {...registerRequisitante('bairro_requisitante')} required />
                                                        <FontAwesomeIcon icon={faMapLocationDot} className='input-icon' required />
                                                        <input type="text" name="localidade_requisitante" className="form-style input-direita" placeholder="Localidade" id="localidade_requisitante" {...registerRequisitante('localidade_requisitante')} required />
                                                        <FontAwesomeIcon icon={faCity} className='input-icon input-icon-left' />
                                                    </div>
                                                    <div className="form-group mt-2 ">
                                                        {errorsRequisitante.cep_requisitante ? <span className="error">{errorsRequisitante.cep_requisitante.message}</span> : null}
                                                        <br />
                                                        {errorsRequisitante.logradouro_requisitante ? <span className="error">{errorsRequisitante.logradouro_requisitante.message}</span> : null}
                                                        <br />
                                                        {errorsRequisitante.numero_requisitante ? <span className="error">{errorsRequisitante.numero_requisitante.message}</span> : null}
                                                        <br />
                                                        {errorsRequisitante.bairro_requisitante ? <span className="error">{errorsRequisitante.bairro_requisitante.message}</span> : null}
                                                        <br />
                                                        {errorsRequisitante.localidade_requisitante ? <span className="error">{errorsRequisitante.localidade_requisitante.message}</span> : null}
                                                    </div>
                                                    <button type='submit' className="btn mt-4">Inscreva-se</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>


        </>
    );
}

export default Formulario;
