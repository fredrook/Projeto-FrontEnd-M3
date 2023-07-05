import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: var(--color-grey);
  display: flex;
  justify-content: center;
  margin-top: 20px;

  width: 100%;
  padding: 10px;

  .containerGeral {
    display: flex;
    max-width: 1100px;
    width: 80%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: 25px;
  }

  .institutional,
  .network,
  .atendimento {
    width: 200px;
  }

  h5 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  h6 {
    font-size: 10px;
    font-weight: 300;
    margin: 0;
  }
  p {
    font-size: 10px;
    font-weight: 300;
  }

  @media (max-width: 400px) {
    height: 60px;
    width: 100%;
    padding: 0;

    .containerGeral {
      width: 95%;
      align-items: center;
    }

    .containerPhone,
    .containerDays {
      width: 100%;
    }

    .institutional,
    .network {
      display: none;
    }

    .atendimento {
      display: flex;
      gap: 10px;
      align-items: center;
      width: 100%;
    }

    h5 {
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    h6 {
      font-size: 8px;
      font-weight: 300;
    }

    p {
      font-size: 8px;
      font-weight: 300;
    }
  }

  @media (min-width: 150px) and (max-width: 240px) {
    .atendimento {
      flex-direction: column;
      gap: 0;
      font-size: 70%;
      width: 80%;
    }
  }

  @media (min-width: 0px) and (max-width: 150px) {
    .atendimento {
      flex-direction: column;
      gap: 0;
    }
  }
`;