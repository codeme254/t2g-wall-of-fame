import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  margin: 2rem auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  text-align: center;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem; 
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const ProjectLinksContainer = styled.div`
  margin-top: 1rem;
`;

export const ProjectLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
