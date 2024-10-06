

import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  /* border: 2px solid crimson; */
  gap: 5rem;
`;

export const StyledText = styled.div`
  text-align: center;
  /* width: %; */
  margin-left: 2px;
  flex: 1;
  line-height: 1.8;
  text-align: justify;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  padding: 3rem;
  /* border: 3px solid yellow; */
  gap: 2rem;

  h2 {
    margin-top: 90px;
    line-height: 1.5;
  }

  p {
    line-height: 1.8;
  }
`;

export const ImageContainer = styled.div`
  img {

    object-fit: cover;
    border-radius: 20px;
    /* border: 3px solid purple; */
    width: 25rem;
  height: auto;
  border-radius: 40px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    
  }
`;
