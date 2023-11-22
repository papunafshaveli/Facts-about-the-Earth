import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-image: url(./earth2.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;

  width: 350px;
  height: 350px;

  border-radius: 50%;
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  nav div {
    padding: 1rem;
    border-radius: 50%;
  }
`;
const SkyDiv = styled.div`
  background-color: aliceblue;
`;
const LandDiv = styled.div`
  background-color: burlywood;
`;
const OceanDiv = styled.div`
  background-color: cadetblue;
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
