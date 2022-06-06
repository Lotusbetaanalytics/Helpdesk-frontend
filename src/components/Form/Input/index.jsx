const Input = ({ img,type, placeholder }) => {
    const inputStyle = {
        width: '29em',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '11px',
        color: 'rgba(0, 0, 0, 0.56)',
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20px center',
        backgroundSize: '15px',
        padding: '23px 60px',
        border: '0',
        borderRadius: '10px',
        marginBottom: '12px'
    }

    return(
        <div>
            <input style={inputStyle} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;