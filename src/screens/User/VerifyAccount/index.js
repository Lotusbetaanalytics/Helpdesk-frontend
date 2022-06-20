import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from "../../../assets/email_icon.png";
import "./styles.css";
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { verification } from "../../../redux/actions/user/authActions";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { VERIFY_ACCOUNT_RESET } from "../../../redux/constants/user/authConstants";
import { useNavigate, useParams } from "react-router-dom";

const VerifyAccount = () => {
  // Helpers
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { email } = useParams();

  //   Get info from state
  const verifyAccount = useSelector((state) => state.verifyAccount);
  const { loading, error, success } = verifyAccount;

  const [token, setToken] = useState("");

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
      dispatch(verification(email, token));
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
    dispatch({ type: VERIFY_ACCOUNT_RESET });
  }

  //   redirect to login if successful
  if (success) {
    toast({
      title: "Success!",
      description: "Verification Successful",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: VERIFY_ACCOUNT_RESET });
    navigate("/user/login");
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
              <FormTitle title="Account Verification" subTitle="Enter Token" />

              <Input
                img={email_icon}
                type="text"
                placeholder="Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />

              <FormButton
                bgColor="#00A19C"
                bxShadow="0px 4px 4px rgba(0, 161, 156, 0.37)"
                content="Verify Account"
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

export default VerifyAccount;
