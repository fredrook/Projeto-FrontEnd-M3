import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1395px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;


  @media screen and (min-height: 800px) {
    height: 800px;
  }
`;

export const TagDivUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  gap: 6px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: none;
    color: var(--color-green);
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .Icon {
      color: var(--color-green);
      width: 45px;
      height: 50px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      color: var(--color-green3);
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
    }

    span {
      color: var(--color-green3);
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const DivModalPerfil = styled.div`
  display: flex;
  width: 95%;
  max-width: 1257px;
  background: var(--color-white);
  border-radius: 8px;
`;