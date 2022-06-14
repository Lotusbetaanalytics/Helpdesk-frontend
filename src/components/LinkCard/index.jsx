import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const LinkCard = ({ borderRadius, linkCardText, page }) => {

    return(
        <div className={styles.linkcard}
             style={{
                display: 'flex',
                flex: '100%'
                }}>
                    <Link to={page}><div style={{
                         borderRadius: borderRadius,
                    }}>
                        <p>{linkCardText}</p>
                    </div>  </Link>
        </div>
    )
}

export default LinkCard;