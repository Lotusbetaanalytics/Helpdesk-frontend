import { Link } from 'react-router-dom';

const Button = ({ fontSize, bgColor="#00A19C", bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)', btnText, page, padding }) => {

    return(
        <div style={{}}>
            <Link
             style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: fontSize,
                backgroundColor: `${bgColor}`,
                border:'0',
                padding: `${padding}`,
                boxShadow: `${bxShadow}`,
                borderRadius: '10px',
                cursor: 'Pointer'}} to={page}>
                    {btnText}
            </Link>
        </div>
    )
}

export default Button;