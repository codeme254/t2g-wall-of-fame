import styled from "styled-components";
import coding from '../Assets/coding.jpg';
import rental from '../Assets/rental.jpg';
import Todolist from '../Assets/Todolist.jpg';
import rockpaperscissor from '../Assets/rockpaperscissors.jpeg'

const projects = [
    {
        title: "Coding Club Website",
        description: "A website for a coding club where members can collaborate and share resources.",
        image: coding,
        codeLink: "https://github.com/Namalwa/Murang-a-University-Tech-Club" 
    },
    {
        title: "Rental Website",
        description: "A platform for listing and renting properties easily and efficiently.",
        image: rental,
        codeLink: "https://github.com/Namalwa/Urban-Havens" 
    },
    {
        title: "To-Do List",
        description: "A simple to-do list application to help users manage their tasks effectively.",
        image: Todolist,
        codeLink: "https://github.com/Namalwa/To-do-list" 
    },
    {
        title: "Rock Paper Scissors",
        description: "The Rock-Paper-Scissors application allows users to play the classic game against the computer.",
        image: rockpaperscissor,
        codeLink: "https://github.com/Namalwa/Rock-Paper-Scissors-Game" 
    },
];

const ProjectSection = styled.div`
    margin-top: 5rem;
    padding: 0 2rem;
`;

const ProjectTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const ProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white; 
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    padding: 1.5rem; 

    &:hover {
        transform: scale(1.02);
    }
`;

const ProjectImage = styled.img`
    width: 90%;
    height: 200px;
    object-fit: cover;
    border-radius: 16px;
    padding: 1rem;
`;

const ProjectContent = styled.div`
    padding: 1rem;
`;

const ProjectTitleText = styled.h3`
    font-size: 1.5rem;
    color: #333; 
    margin: 0.5rem 0;
`;

const ProjectDescription = styled.p`
    font-size: 1.3rem; 
    color: #666; 
    margin: 0;
`;

const ViewCodeButton = styled.a`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: black;
    color: white; 
    text-decoration: none; 
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #333; 
    }
`;

function Projects() {
    return (
        <ProjectSection id="projects">
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectList>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <ProjectImage src={project.image} alt={`${project.title} screenshot`} />
                        <ProjectContent>
                            <ProjectTitleText>{project.title}</ProjectTitleText>
                            <ProjectDescription>{project.description}</ProjectDescription>
                        </ProjectContent>
                        <ViewCodeButton href={project.codeLink} target="_blank">View Code</ViewCodeButton>
                    </ProjectCard>
                ))}
            </ProjectList>
        </ProjectSection>
    );
}

export default Projects;
