import styles from './styles.module.css';


const Card = ({ bgColor, no, cardText }) => {

    return(
        <div className={styles.card}
             style={{
                background: `${bgColor}`}}>
                    <div>
                        <p>{no}</p>
                        <small>{cardText}</small>
                    </div>  
        </div>
    )
}

export default Card;