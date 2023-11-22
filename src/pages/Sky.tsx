import styled from "styled-components";
import Button from "../components/Button";

const skyFacts = [
  {
    fact: "1. The Moon Has a Lemon Shape",
    description:
      "When we look up at the moon at night, it looks like a perfect circle, and from our vantage point on Earth, it is. It wasn’t until we left Earth and explored the Moon in space that we saw that it really has a lemon shape. We think that the Moon got its shape shortly after its formation from the gravitational pull of the Earth. In short, Earth’s gravity stretched the moon out, but since it was pulled directly toward Earth, it still appears like a perfect circle to us!",
  },
  {
    fact: "2. You Can See 9 Galaxies in the Night Sky",
    description:
      "We’ve all had nights spent just gazing into the depth of the glorious night sky. But did you know you can actually spot around 9 galaxies in the sky with your naked eye. The most obvious one is the Andromeda Galaxy, which is bright enough to spot easily even on relatively darker, moonless nights.",
  },
  {
    fact: "3. The Most Common Type of Star is the Red Dwarf",
    description:
      "Star types have rather interesting names! Did you know? The most common type of star is the Red Dwarf. These stars burn very, very slowly, which means they can live up to a 100 billion years! These stars shine less than other ones, as their brightness decreases over time. They are typically less than half of the sun’s mass and size.",
  },
];

const SkyDiv = styled.div``;

const Sky = () => {
  return (
    <SkyDiv>
      <Button />
      {skyFacts.map((facts) => (
        <div key={facts.fact}>
          <h1>{facts.fact}</h1>
          <p>{facts.description}</p>
        </div>
      ))}
    </SkyDiv>
  );
};

export default Sky;
