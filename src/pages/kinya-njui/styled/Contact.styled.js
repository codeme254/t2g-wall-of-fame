import styled from 'styled-components';

export const ContactCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 1rem 1rem grey;
  margin: 5rem auto;
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  text-shadow: 2px auto;
  margin-bottom: 20px;
  color: #333;
`;

export const ContactInformation = styled.p` 
  font-weight: 500;
  font-size: 1.7;
  margin-bottom: 20px
`;

export const ContactItem = styled.p`
  font-size: 2rem;
  margin: 10px 0;
  color: #666;
  strong {
    color: #333;
  }
`;
