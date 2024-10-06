import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  height: 40vh;
  /* border: 3px solid green; */
  width: 40%;
  margin: auto;
  letter-spacing: .5rem;
 


`;



export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 800;
  color: black;
  /* border: 2px solid yellow; */
`;

export const ContactInfo = styled.h4`
  font-size: 2rem;
  margin: 10px 0;
  color: gray;

`;
export const ContactCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(3, 0, 0, 0.9);
  padding: 20px;
  width: 350px;
  text-align: center;
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  font-size: 2rem;

  a {
    margin: 0 10px;
    color: #1da1f2;
    font-size: 2rem;
    text-decoration: none;

    &:hover {
      color: purple;
      transition: 1.5s;
    }
  }
`;
