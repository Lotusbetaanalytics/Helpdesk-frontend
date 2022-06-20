import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from "../../../assets/email_icon.png";
import "./styles.css";
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { forgotMyPassword } from "../../../redux/actions/user/authActions";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { FORGOT_PASSWORD_RESET } from "../../../redux/constants/user/authConstants";

const ForgotPassword = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  //   Get info from state
  const forgotPassword = useSelector((state) => state.forgotPassword);
  const { loading, error, success } = forgotPassword;

  const [email, setEmail] = useState("");

  //   Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Warning!",
        description: "Please enter email",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(forgotMyPassword(email));
    }
  };

  //   error
  if (error) {
    toast({
      title: "Error!",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: FORGOT_PASSWORD_RESET });
  }

  //   redirect to login if successful
  if (success) {
    toast({
      title: "Success!",
      description: "An email has been sent to your account",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: FORGOT_PASSWORD_RESET });
  }

  return (
    <div className="userRegister">
      <FormHeader />

      <div className="userRegisterBody">
        <div>
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="#00A19C" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <FormTitle
                title="Forgot Password"
                subTitle="Please enter your Email Address"
              />

              <Input
                img={email_icon}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormButton
                bgColor="#00A19C"
                bxShadow="0px 4px 4px rgba(0, 161, 156, 0.37)"
                content="Forgot Password"
              />
            </form>
          )}
          <FormFooter
            footerText="Already have an account?"
            footerSpanText="Login"
            color="#9A198C"
            page="/user/login"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
