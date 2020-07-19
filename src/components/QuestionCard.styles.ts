import styled from 'styled-components';

export const Wrapper = styled.div`
    
        font-size: 1rem;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;
    font-weight: bold;


    `;

type ButtonWrapperProps = {
     correct: boolean;
     userClicked: boolean;
}

export const    ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;

    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        font-weight: bold;
        width: 100%;
        padding: 0px;       
        height: 40px;
        margin: 5px 2px;
        background: ${({ correct, userClicked}) => 
          correct
              ?  'linear-gradient(90deg, #56ffa4, #59bc86)'
              : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #56ccff, #ceafb4)'};
        border: 3px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #ffffff
        text-shadow: 0px 1px 0px rgba(0,0,0,0.25);
    }`;