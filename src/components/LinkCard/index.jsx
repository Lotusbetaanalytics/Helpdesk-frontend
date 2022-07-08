// import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const LinkCard = ({ borderRadius, linkCardText, page, Edit, Delete, onEdit, onDelete }) => {

    return (
        <div className={styles.linkcard}
            style={{
                display: 'flex',
                flex: '100%'
            }}>
            <div style={{
                borderRadius: borderRadius,
            }}>
                <p>{linkCardText}</p>
                {Edit && <Edit onClick={onEdit} />}
                {Delete && <Delete onClick={onDelete} />}
            </div>
        </div>
    )
}

export default LinkCard;