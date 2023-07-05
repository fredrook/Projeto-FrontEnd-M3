import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 1395px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  .divBtnReturn{
    display: flex;
    justify-content: flex-end;
    width: 95%;
    max-width: 1238px;

    > button{
      background-color: transparent;
      border: none;
      color: var(--color-green3);
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    
      :hover{
        color: var(--color-green2);
      }
    }
  }
`;