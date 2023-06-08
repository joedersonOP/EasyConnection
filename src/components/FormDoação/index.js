import React, { useState } from 'react';
import './FormDoacao.css';
import '../CampoTexto/CampoTexto.css';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SweetAlert from '../SweetAlert';
import { Button } from 'react-bootstrap';

const FormDoacao = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alimentosCount, setAlimentosCount] = useState(1);

  const schema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório'),
    requisitante: yup.string().required('O requisitante é obrigatório'),
    alimentos: yup.array().of(yup.string().required('Informe o(s) alimento(s)')).min(1, 'Informe pelo menos 1 alimento'),
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({ resolver: yupResolver(schema) });

  const handleFormSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setShowAlert(true);
    }
  };

  const handleAddAlimento = () => {
    setAlimentosCount(alimentosCount + 1);
  };

  const handleRemoveAlimento = (index) => {
    setAlimentosCount(alimentosCount - 1);
    const alimentos = watch('alimentos');
    alimentos.splice(index, 1);
    setValue('alimentos', alimentos);
  };

  const requisitantes = [{ nome: "Associação Solidariedade" },
  { nome: "Fundação Alimentar" },
  { nome: "Instituto Social Vida" },
  { nome: "Associação Amor e Cuidado" },
  { nome: "ONG Semeando Esperança" },
  { nome: "Fundação Compaixão" },
  { nome: "Instituto Esperança na Ação" },
  { nome: "Associação Pão e Alegria" },
  { nome: "ONG União Solidária" },
  { nome: "Fundação Cidadania Ativa" }
  ]

  const alimentos = [
    { value: 'Arroz' },
    { value: 'Batata' },
    { value: 'Carne' },
    { value: 'Cenoura' },
    { value: 'Feijão' },
    { value: 'Frango' },
    { value: 'Macarrão' },
    { value: 'Espinafre' },
    { value: 'Tomate' }
  ];


  return (
    <div className="form_contato my-5">
      {showAlert && (
        <SweetAlert
          titulo="Parabéns!"
          mensagem="Doação realizada com sucesso!"
          icone="success"
          onClose={() => setShowAlert(false)}
        />
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-logo"></div>
        <div className="form-title">DOAÇÃO</div>
        <div className="inputs form_group">
          <div className="campo_texto field">
            <input type='text' className="campo_texto__field" placeholder='Nome' name='nome' id='nome' required {...register('nome')} />
            <label htmlFor='nome' className="campo_texto__label">Seu Nome</label>
            {errors.nome && <span className="error">{errors.nome.message}</span>}
          </div>

          <div className="campo_texto field">
            <select className="campo_texto__field" name='requisitante' id='requisitante' required {...register('requisitante')}>
              <option value="">informe o requisitante</option>
              {requisitantes.map(requisitante => (<option key={requisitante.nome}>{requisitante.nome}</option>))}
            </select>
            <label htmlFor='requisitante' className="campo_texto__label">Instituição</label>
            {errors.requisitante && <span className="error">{errors.requisitante.message}</span>}
          </div>

          {Array.from({ length: alimentosCount }, (_, index) => (
            <div className="campo_texto field" key={index}>
              <select className="campo_texto__field alimentos" name={`alimentos[${index}]`} id={`alimentos[${index}]`} required {...register(`alimentos[${index}]`)}>
                <option value="">informe o(s) alimento(s)</option>
                {alimentos.map(alimento => (
                  <option key={alimento.value}>{alimento.value}</option>
                ))}
              </select>
              <label htmlFor={`alimentos[${index}]`} className="campo_texto__label">Alimentos</label>
              {errors.alimentos && errors.alimentos[index] && <span className="error errorAlimento">{errors.alimentos[index].message}</span>}
              {index === 0 && (
                <Button className='btnDoacao btnAdicionar' onClick={handleAddAlimento}>+</Button>
              )}
              {index !== 0 && (
                <Button className='btnDoacao btnExcluir' onClick={() => handleRemoveAlimento(index)}>-</Button>
              )}
            </div>
          ))}
        </div>
        <button className='form-button' type="submit">DOAR</button>
      </form>
    </div>
  );
};

export default FormDoacao;
