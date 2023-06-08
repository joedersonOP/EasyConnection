
import Swal from 'sweetalert2';

const SweetAlert = (props) => {

  Swal.fire({
    title: props.titulo,
    text: props.mensagem,
    icon: props.icone,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/';
    } else {
      window.location.href = '/';
    }
  });

  return null;
}

export default SweetAlert;