import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  width: auto;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 22px;
  padding: 20px 58px;
  text-transform: uppercase;
  transition: ease-in 0.16s;
  background-color: #b6cc37;
  color: white;
  &:hover a {
    color: black; 
    border: 1px solid #b6cc37;
    text-decoration: none;
  }  
`;