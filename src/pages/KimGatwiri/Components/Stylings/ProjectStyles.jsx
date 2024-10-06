import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.9rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  width:rem;
  height:20rem;

  

  h3 {
    margin-top: 10px;
    font-size: 1.9rem;
    color:#000;
  }

  p {
    margin: 5px 0;
    font-size: 1.7rem;
    color:#000;
  }

  a {
    display: inline-block;
    margin: 5px;
    font-size:1.6rem;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color:#61dafb;
      color:black;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;
