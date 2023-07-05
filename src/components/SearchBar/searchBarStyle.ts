import styled from "styled-components";

export const ContainerSearch = styled.div`
  background-color: var(--color-white);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  width: 90%;
  max-width: 1240px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerGeral {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .containerText {
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
  .containerINput {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-fontescura);
  }
  input {
    width: 100%;
    height: 38px;
    padding-left: 10px;
    background-color: var(--color-grey);
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37px;
    height: 37px;
    border: none;
    background-color: var(--color-green);
    color: white;
    font-size: 20px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    :hover {
      background-color: var(--color-green2);
    }
  }
`;