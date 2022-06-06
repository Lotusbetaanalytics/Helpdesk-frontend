import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from '../../../assets/email_icon.png';
import pwd_icon from '../../../assets/pwd_icon.png';
import './adminlogin.css'
import FormButton from "../../../components/Form/FormButton";

const AdminLogin = () => {
    return(
        <div className="adminLogin">
            <FormHeader />

            <div className="adminLoginBody">
                <div>
                    <FormTitle title='Hello There!' subTitle='Please enter your correct details'/>
                    <Input img={email_icon} type='email' placeholder='Email Address'/>
                    <Input img={pwd_icon} type='password' placeholder='Password'/>
                    <FormButton bgColor='#00A19C' bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)' content='Login'/>
                </div>
            </div>
        </div>    
    )
}


export default AdminLogin;