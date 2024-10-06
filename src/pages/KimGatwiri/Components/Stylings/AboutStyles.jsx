import styled from 'styled-components';

export const AboutContainer = styled.section`
    padding: 5rem 2rem;
    background-color:black; 
    color: #fff;
`;

export const Title = styled.h2`
    font-size: 3.5rem;
    margin-bottom:5rem; 
    text-align: center; 
`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: flex-start; 
    justify-content: center; 
`;

export const Avatar = styled.img`
    width: 300px;
    height: auto;
    border-radius: 15px;
    
    margin-left:19rem
`;

export const AboutText = styled.div`
    text-align: left; 
    margin-right:10rem;
    line-height:5px;
    p {
        font-size: 2.2rem;
        line-height:2.7rem;
        
        margin-bottom:5rem; 
    }
`;

export const TechContainer = styled.div`
    margin-top:2rem;
`;

 

 export const AboutContent= styled.div`
 display:flex;
 gap:10rem


`
export const TechItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
width: 100%; /* Ensures the TechItem takes full width of container */
font-size:2rem
`;

export const TechLevel = styled.div`
height: 10px;
background-color: #61dafb;
border-radius: 5px;
margin-left:90px;
width: ${(props) => props.width || '100%'};
transition: width 0.3s ease-in-out;
max-width:100%;
`;
export const TechLevelContainer = styled.div`
  width: 100%; /* This makes sure the bars start from the same point */
  margin-left: 10px; /* Adjust space between text and bar */
  background-color: #e0e0e0; /* Add a light background to the container */
  height: 10px;
  border-radius: 5px;
`;