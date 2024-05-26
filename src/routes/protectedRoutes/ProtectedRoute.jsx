import useAuthInfo from "../../hooks/authInfo/useAuthInfo";
import Loading from "../../loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading, user } = useAuthInfo();
  if (isLoading) {
    return <Loading></Loading>;
  } else if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
