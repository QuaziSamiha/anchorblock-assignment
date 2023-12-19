import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = useSelector((state) => state.auth);
  console.log("user in private route: ", user);
  if (loading) {
    return "loading....";
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
