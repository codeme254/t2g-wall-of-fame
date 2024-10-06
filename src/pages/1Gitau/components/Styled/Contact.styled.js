import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: crimson; */
  /* border: 1px solid green; */
  /* padding: 2rem; */
  /* margin: auto; */
`;



export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  color: blue;
`;

export const ContactInfo = styled.h4`
  font-size: 2rem;
  margin: 10px 0;
  color: blue;

`;
export const ContactCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
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
      color: #0d8bf2;
      transition: 0.5s;
    }
  }
`;
