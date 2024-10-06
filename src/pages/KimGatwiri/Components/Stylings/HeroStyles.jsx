import styled from 'styled-components';

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #000; 
    padding: 5rem 2rem;
    color: #fff;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 3rem;
`;

export const HeroText = styled.div`
    h1 {
        font-size:4.4rem;
        font-weight: 700;
        span {
            background-color:#61dafb;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    h2 {
        font-size:4rem;
        color: #f1faee;
        margin-bottom: 1.2rem;
    }

    p {
        font-size: 2.2rem;
        max-width: 600px;
        color: #f1faee;;
        margin: 1rem 0;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

export const ContactButton = styled.button`
    background: linear-gradient(159deg, #61dafb 0%, #1a8fe3 100%);
    
    color: #000;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 1.7rem;
    transition: background 0.3s ease;

    &:hover {
        background-color:#61dafb;
        color:white;
    }
`;
