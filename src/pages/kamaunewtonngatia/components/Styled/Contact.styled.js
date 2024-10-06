import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 1rem;
  width: 70%;
  justify-content: center;

  label {
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 2px;
  }

  textarea {
    resize: vertical;
  }

  button{
    padding:1rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: green;
  }
`;
