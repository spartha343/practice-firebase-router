import { useLocation, useNavigate } from "react-router-dom";
import useAuthInfo from "../authInfo/useAuthInfo";

const useGoogleSignIn = () => {
  const { signInWithGoogle } = useAuthInfo();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return handleGoogleSignIn;
};

export default useGoogleSignIn;
