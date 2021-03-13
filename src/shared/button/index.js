import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #00304c;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Button = (props) => {
  return <ButtonWrapper { ...props }>{props.children}</ButtonWrapper>;
};
export default Button;
