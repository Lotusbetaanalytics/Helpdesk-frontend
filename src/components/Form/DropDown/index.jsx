const Dropdown = ({ placeholder, color, bgColor, border, width, height }) => {
    const dropdownStyle = {
        appearance: 'none',
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        border: `${border}`,
        width: `${width}`,
        height: `${height}`,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '13px',
        backgroundImage: "url('../../../assets/dropdown_icon.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% center',
        backgroundSize: '10px',
        paddingLeft: '30px',
        borderRadius: '20px',
        marginBottom: '12px'
    }

    return(
        <select style={dropdownStyle} className='dropdown'>
            <option value=''>{placeholder}</option>
            <option></option>
            <option></option>
        </select>
    )
}

export default Dropdown;