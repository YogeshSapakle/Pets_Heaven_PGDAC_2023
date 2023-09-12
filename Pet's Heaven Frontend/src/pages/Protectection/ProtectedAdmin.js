import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const ProtectedAdmin = ({ children }) => {
  const { user } = useAppContext();
  // console.log(user.role[0].roleName);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user?.role[0].roleName !== "Admin") {
    return <Navigate to="/not-admin" />;
  }
  return children;
};

export default ProtectedAdmin;
