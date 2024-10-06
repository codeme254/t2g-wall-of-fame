import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  font-weight:900;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #000;
  border: 1px solid #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 150px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  h3 {
    margin-top: 10px;
    margin-bottom:10px;
    font-size: 1.9rem;
    color:#61dafb;;
  }

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
