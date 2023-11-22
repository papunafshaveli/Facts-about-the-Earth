import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return <Btn onClick={handleBack}>back</Btn>;
};

export default Button;

const Btn = styled.div`
  background-color: #ffa17f;
  text-align: center;
  border: 1px solid brown;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
