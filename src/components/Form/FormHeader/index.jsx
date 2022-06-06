import { Link } from 'react-router-dom';

const FormHeader = () => {
    const formHeaderStyles = {
        width: '100%',
        boxShadow: '0px 4px 30px #E5E5E5',
        padding: '15px 30px',
    }

    const formHeaderStylesA = {
        color: '#000',
        textDecoration: 'none',
        fontSize: '22px',
        fontWeight: '500'
    }

    return(
        <div style={formHeaderStyles}>
            <Link to='/' style={formHeaderStylesA}>LBAN HELPDESK PORTAL</Link>
        </div>
    )
}

export default FormHeader;