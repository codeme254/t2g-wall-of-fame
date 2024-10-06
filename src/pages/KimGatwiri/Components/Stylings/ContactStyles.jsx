import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px;
  background-color:#000;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.9rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 5rem;
  margin-left:19rem;

  h3 {
    margin-bottom: 15px;
    font-size:3rem;
    color:#61dafb;;
    
  }

  h4 {
    margin-top: 20px;
    font-size:2.2rem;
    margin-bottom:5px;
  }

  p {
    margin: 5px 0;
    font-size: 2.2rem;
  }
`;

export const FormWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    font-size:1.8rem;
    letter-spacing:1.2px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  textarea {
    resize: none; 
  }
`;

export const SubmitButton = styled.button`
  padding:15px ;
  margin-left:17rem;
  margin-right:17rem;
  
  background-color:#61dafb;
  color:#161513;
  border: none;
  border-radius:20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size:1.8rem;

  &:hover {
    background-color:white;
  }
`;
