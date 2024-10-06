import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 10px;
`;
export const ProjectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 4rem;
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardHeading = styled.h3`
  margin-bottom: 15px;
  font-size: 2rem;
  line-height: 1.2;
`;

export const ViewLink = styled(Link)`
  display: inline-block;
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    background-color: darkgreen;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
