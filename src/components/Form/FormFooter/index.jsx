import { Link } from 'react-router-dom';

const FormFooter = ({ footerText, footerSpanText, color, page }) => {
    const formFooterStyles = {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '30px',
        color: 'rgba(0, 0, 0, 0.77)',
        marginTop: '10px'
    }

    const footerLinkTextStyles= {
        color: `${color}`,
        textDecoration: 'none'
    }

    return(
        <div style={formFooterStyles}>
            <p>{footerText} <Link to={page} style={footerLinkTextStyles}>{footerSpanText}</Link></p>
        </div>
    )
}

export default FormFooter;