import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarDiv = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    background-image: url(./earth2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    padding: 7rem 0;
    width: 80%;
    border-radius: 45%;
  }
`;
const SkyDiv = styled.div`
  background-color: aliceblue;
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: 40px;
  border: none;
`;
const LandDiv = styled.div`
  background-color: burlywood;
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: 40px;
  border: none;
`;
const OceanDiv = styled.div`
  background-color: cadetblue;
  padding: 1.5rem 1.2rem;
  border: 1px solid black;
  border-radius: 40px;
  border: none;
`;

const NavBar = () => {
  return (
    <NavBarDiv>
      <nav>
        <SkyDiv>
          <Link to="/sky">sky</Link>
        </SkyDiv>
        <LandDiv>
          <Link to="/land">land</Link>
        </LandDiv>
        <OceanDiv>
          <Link to="/ocean">ocean</Link>
        </OceanDiv>
      </nav>
    </NavBarDiv>
  );
};

export default NavBar;
