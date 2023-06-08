
import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo_texto field">
            <input className="campo_texto__field" placeholder={props.label} name={props.label} id={props.label} required />
            <label htmlFor={props.label} className="campo_texto__label">{props.label}</label>
        </div>
    )
}

export default CampoTexto