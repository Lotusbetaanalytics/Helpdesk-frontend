import lban_white_logo1 from '../../assets/lban_white_logo1.png';
import styles from './styles.module.css';

const Logo = ({ logoContent }) => {

    return(
        <div className={styles.logo}>
                <img src={lban_white_logo1} alt='Lban White Logo'/>
                <div className={styles.logocontent}>

                    {logoContent}
                </div>
        </div>
    )
}

export default Logo;

