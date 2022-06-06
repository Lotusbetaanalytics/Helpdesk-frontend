import  styles from './styles.module.css'

const Dropdown = ({ placeholder }) => {

    return(
        <select className={styles.dropdown}>
            <option value=''>{placeholder}</option>
            <option></option>
            <option></option>
        </select>
    )
}

export default Dropdown;