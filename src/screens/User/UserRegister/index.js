import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import name_icon from '../../../assets/name_icon.png';
import email_icon from '../../../assets/email_icon.png';
import pwd_icon from '../../../assets/pwd_icon.png';
import './userregister.css'
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";

const UserRegister = () => {
    return(
        <div className="userRegister">
            <FormHeader />

            <div className="userRegisterBody">
                <div>
                    <FormTitle title='Register' subTitle='Please enter your correct details'/>
                    <Input img={name_icon} type='name' placeholder='Full Name'/>
                    <Input img={email_icon} type='email' placeholder='Email Address'/>
                    <Input img={pwd_icon} type='password' placeholder='Password'/>
                    <Input img={pwd_icon} type='password' placeholder='Confirm Password'/>
                    <FormButton bgColor='#00A19C' bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)' content='Register'/>
                    <FormFooter footerText='Already have an account?' footerSpanText='Login' color='#9A198C' page='/user/login'/>
                </div>
            </div>
        </div>    
    )
}


export default UserRegister;