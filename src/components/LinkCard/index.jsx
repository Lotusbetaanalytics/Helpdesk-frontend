import styles from './styles.module.css';


const LinkCard = ({ bgColor, width, height, border, bxShadow, linkCardText }) => {

    return(
        <div className={styles.linkcard}
             style={{
                background: `${bgColor}`,
                width: `${width}`,
                height: `${height}`,
                border: `${border}`,
                boxShadow: `${bxShadow}`,
                display: 'flex',
                flex: '100%'}}>
                    <div>
                        <p>{linkCardText}</p>
                    </div>  
        </div>
    )
}

export default LinkCard;