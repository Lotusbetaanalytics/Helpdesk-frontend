import { Link } from 'react-router-dom';

const Button = ({ bgColor, bxShadow, btnText, page }) => {

    return(
        <div>
            <Link
             style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '18px',
                backgroundColor: `${bgColor}`,
                border:'0',
                padding: '15px 40px',
                boxShadow: `${bxShadow}`,
                borderRadius: '10px',
                cursor: 'Pointer'}} to={page}>
                    {btnText}
            </Link>
        </div>
    )
}

export default Button;