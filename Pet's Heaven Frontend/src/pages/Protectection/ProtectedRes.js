import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const ProtectedRes = ({ children }) => {
  const { user } = useAppContext();
  // console.log(user.role[0].roleName);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user?.role[0].roleName !== "Rescuer") {
    return <Navigate to="/not-res" />;
  }
  return children;
};

export default ProtectedRes;
