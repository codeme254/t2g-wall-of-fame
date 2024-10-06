import styled from "styled-components";

export const StyledHeading = styled.header`
  text-align: center;
  font-size: 3rem;
  text-transform: capitalize;
  margin-top: 5rem;
  font-weight: 800;
  font-size: 5rem;
`;
export const StyledDiv = styled.div`
  display: flex;
  /* flex-direction:column; */
  align-items: center;
  gap: 3rem;

  p {
    width: 50%;
    letter-spacing: 1px;
    line-height: 1.7;
    text-align: justify;
  }
  img {
    width: 50%;
    height: 80vh;
    object-fit: cover;
    border-radius: 5px;
    overflow: hidden;
  }
`;
