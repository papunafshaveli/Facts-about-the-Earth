import styled from "styled-components";
import Button from "../components/Button";

const oceanFacts = [
  {
    fact: "1. Almost all of the Earth’s habitable space is in the ocean.",
    description:
      "It’s a well-documented fact that the ocean covers 70 percent of the Earth’s surface. But when we take into account its sheer depth – up to 10 kilometers in the deepest depths of the Pacific – it accounts for over 99 percent of all living space on the planet.",
  },
  {
    fact: "2. The ocean is the Earth’s greatest source of oxygen",
    description:
      "Kelp, algae and tiny ocean phytoplankton are responsible for producing about 70 percent of all atmospheric oxygen. The ocean also absorbs about a third of all carbon dioxide produced on Earth and stores 50 times more carbon dioxide than the atmosphere. However, as the ocean absorb more and more carbon dioxide, its water is acidifying, making it more difficult for sea creatures to breathe.",
  },
  {
    fact: "3. More people have been to the moon than the deepest parts of the sea.",
    description:
      "Twelve people have been to the moon, but only three people have been to the Marianas Trench – the deepest point in the ocean, inaccessible due to its extreme pressure conditions. One of those three was film director and producer James Cameron.",
  },
];

const OceanDiv = styled.div``;

const Ocean = () => {
  return (
    <OceanDiv>
      <Button />
      {oceanFacts.map((facts) => (
        <div key={facts.fact}>
          <h1>{facts.fact}</h1>
          <p>{facts.description}</p>
        </div>
      ))}
    </OceanDiv>
  );
};

export default Ocean;
