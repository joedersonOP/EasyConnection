import './QuemSomos.css';

<script
  src="https://kit.fontawesome.com/66aa7c98b3.js"
  crossorigin="anonymous"
></script>

const QuemSomos = (props) => {
  return (
    <div className="card">
      <div className="img-bx"><img src={props.foto} alt="foto"/></div>
      <div className="content">
        <div className="detail">
          <h3 className='nome'>{props.nome}<br /><span className='turma'>{props.turma}</span>
            <p className='rm'>{props.rm}</p></h3>
          <ul className="sci">
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QuemSomos;