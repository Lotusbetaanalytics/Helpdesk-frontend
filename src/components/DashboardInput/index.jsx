const DashboardInput = ({ img,type, placeholder, inputName }) => {
    const dashboardInputStyle = {
        height: '70px',
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% center',
        backgroundSize: '10px',
        paddingLeft: '30px',
        borderRadius: '20px',
        marginBottom: '12px',
        display: 'flex',
        placeItem: 'center'
    }

    const inputStyle = {
        width: '100%',
        backgroundColor: 'transparent',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '11px',
        color: 'rgba(0, 0, 0, 0.56)',
        border: '0',
        padding: '0 10px'
    }

    return(
        <div style={dashboardInputStyle}>
            <input type={type} placeholder={placeholder} style={inputStyle} name={inputName}/>
        </div>
    )
}

export default DashboardInput;