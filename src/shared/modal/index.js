import styled from 'styled-components';
import Button from './button';

const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    .background {
        width: 100vw;
        height: 100vh;
        opacity: 0.6;
        background-color: black;
    }
    .body {
        overflow: hidden;
        position: absolute;
        width: 60vw;
        height: 60vh;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loading-text {
        font-size: 24px;
        font-weight: 600;
        margin: 10px auto;
    }
`;
const Modal = ({ text, okText, onClick }) => {
  <ModalWrapper>
    <div className="background" />
    <div className="body">
      <p className="text">{text}</p>
      <Button onClick={ onClick }>{okText || 'OK'}</Button>
    </div>
  </ModalWrapper>;
};

export default Modal;
