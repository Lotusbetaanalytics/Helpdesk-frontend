import { AiOutlineClose } from 'react-icons/ai';
import AdminSideBar from '../AdminSideBar';
import styles from './styles.module.css';
import Button from '../Button';


const Modal = ({ setIsOpen }) => {
  return (
    <div className={styles.modal} onClick={ () => setIsOpen(false) }>
        <AdminSideBar />
        <div className={styles.wrapper}>
          <div>
              <p className={styles.modalCloseBtn}>
                <AiOutlineClose onClick={ () => setIsOpen(false) }/>
              </p>
              <input type='text' name='teamname' id='teamname' placeholder='Team Name'/>
              <p><Button fontSize='14px' btnText='Add' padding='22px 55px' page='/' className={styles.btn}/></p>
          </div>
        </div>
    </div>
  )
}

export default Modal;