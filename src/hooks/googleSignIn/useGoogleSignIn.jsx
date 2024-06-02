import { useLocation, useNavigate } from "react-router-dom";
import useAuthInfo from "../authInfo/useAuthInfo";
import useStoreUserToDB from "../storeUserToDB/useStoreUserToDB";

const useGoogleSignIn = () => {
  const storeUserInDB = useStoreUserToDB();
  const { signInWithGoogle } = useAuthInfo();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
        storeUserInDB(result.user);
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
