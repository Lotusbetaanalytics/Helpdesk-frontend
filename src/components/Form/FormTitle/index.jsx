const FormTitle = ({ title, subTitle }) => {
    const formTitleBodyStyle = {
        marginBottom: '10px'
    }

    const formTitleH2Style = {
        fontSize: '24px',
        fontWeight: '500'
    }

    const formTitleSmallStyle = {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '30px',
        color: 'rgba(0, 0, 0, 0.77)'
    }

    return(
        <div style={formTitleBodyStyle}>
            <h2 style={formTitleH2Style}>{title}</h2>
            <small style={formTitleSmallStyle}>{subTitle}</small>
        </div>
    )
}

export default FormTitle;