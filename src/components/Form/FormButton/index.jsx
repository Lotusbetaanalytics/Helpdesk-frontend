const FormButton = ({ bgColor, bxShadow, content }) => {
    const formButtonStyle = {
        width: '100%',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '11px',
        color: '#fff',
        backgroundColor: `${bgColor}`,
        marginTop: '5px',
        padding: '20px',
        border: '0',
        borderRadius: '10px',    
        boxShadow: `${bxShadow}`,
        cursor: 'Pointer'
    }

    return(
        <div>
            <button style={formButtonStyle} type='submit'>{content}</button>
        </div>
    )
}

export default FormButton;