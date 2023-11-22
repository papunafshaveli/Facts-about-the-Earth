import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const FooterDiv = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #386592;
`;

const handleFbClick = () => {
  window.location.href = "https://www.facebook.com/papunafshaveli";
};

const handleInstaClick = () => {
  window.location.href = "https://www.instagram.com/papunart/";
};

const handleYtClick = () => {
  window.location.href =
    "https://www.youtube.com/channel/UC8GUnP1KWNGgMZnKR7dLy-w";
};
const Footer = () => {
  return (
    <FooterDiv>
      <FaFacebook onClick={handleFbClick} />
      <FaInstagram onClick={handleInstaClick} />
      <FaYoutube onClick={handleYtClick} />
    </FooterDiv>
  );
};

export default Footer;
