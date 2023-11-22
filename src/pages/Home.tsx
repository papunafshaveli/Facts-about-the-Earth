import styled from "styled-components";
import NavBar from "../components/NavBar";

const HomeDiv = styled.div`
  height: 100vh;
  background-image: url(./earth.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    text-align: center;
    padding-top: 100px;
    color: aliceblue;
    padding-bottom: 3rem;
  }
`;

const Home = () => {
  return (
    <HomeDiv>
      <h1>Facts about the Earth</h1>
      <NavBar />
    </HomeDiv>
  );
};

export default Home;
