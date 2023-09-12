import React from "react";
import { useAppContext } from "../../context/appContext";
import "./CustomAlert.css";

const CustomAlert = () => {
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default CustomAlert;
