import styled from "styled-components";
import Button from "../components/Button";

const landFacts = [
  {
    fact: "1. Earth isn’t actually round",
    description:
      "While this sounds like an elaborate joke, we’re actually serious. Earth isn’t flat, but it’s not perfectly round either. Earth’s rotation causes the planet to bulge at the equator and flatten at the poles, while the distribution of mass on Earth (which is not perfectly uniform) causes small variations in the gravitational pull at different locations on the planet. These variations are too small to be seen in pictures of Earth from space, so it appears round to the human eye. ",
  },
  {
    fact: "2. EARTH IS BILLIONS OF YEARS OLD",
    description:
      "Researchers calculate the age of the Earth by dating both the oldest rocks on the planet and meteorites that have been discovered on Earth (meteorites and Earth formed at the same time, when the solar system was forming). Their findings? Earth is about 4.54 billion years old, according to the National Center for Science Education.",
  },
  {
    fact: "3. THE HOTTEST SPOT IS IN LIBYA",
    description:
      "The fiery award for Earth’s hottest spot goes to El Azizia, Libya, where temperature records from weather stations reveal it hit 136 degrees Fahrenheit (57.8 degrees Celsius) on Sept. 13, 1922, according to NASA Earth Observatory. There have likely been hotter locations beyond the network of weather stations.",
  },
];

const LandDiv = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    background-color: aquamarine;
  }
  p {
    background-color: #301a1a;
    color: white;
    padding: 1rem 2rem;
  }
`;

const Land = () => {
  return (
    <LandDiv>
      <Button />
      {landFacts.map((facts) => (
        <div key={facts.fact}>
          <h1>{facts.fact}</h1>
          <p>{facts.description}</p>
        </div>
      ))}
    </LandDiv>
  );
};

export default Land;
