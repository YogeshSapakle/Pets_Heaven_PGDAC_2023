import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const ProtectedUser = ({ children }) => {
  const { user } = useAppContext();
  // console.log(user.role[0].roleName);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user?.role[0].roleName !== "User") {
    return <Navigate to="/not-user" />;
  }
  return children;
};

export default ProtectedUser;
