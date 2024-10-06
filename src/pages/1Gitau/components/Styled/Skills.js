import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 80%;
  margin: 3rem auto;
  text-align: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: capitalize;
  /* border: 2px solid blue; */
  text-shadow: blue;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  /* border: 2px solid blue; */
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 25px;

  box-shadow: 20px 20px 50px 15px grey;
  text-align: center;
  /* border: 2px solid purple; */
`;

export const CardImage = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  line-height: 1.6;
  letter-spacing: 0.5px;
`;
