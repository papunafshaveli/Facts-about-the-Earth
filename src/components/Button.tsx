import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return <button onClick={handleBack}>back</button>;
};

export default Button;
