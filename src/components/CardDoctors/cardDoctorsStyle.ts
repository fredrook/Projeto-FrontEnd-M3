import styled from "styled-components";

export const ListDoctors = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  justify-content: flex-start;

  li {
    background-color: var(--color-green);
    width: 267px;
    color: var(--color-white);
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.02);
  }

  h2 {
    font-size: 18px;
    font-weight: 800;
  }

  span {
    font-size: 12px;
    font-weight: 300;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .containerHeader {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .containerHeader button {
    background-color: transparent;
    border: none;
    color: var(--color-white);
    font-size: 20px;
  }

  .containerHeader button:hover {
    color: var(--color-green2);
  }
`;

export const ContainerDoctors = styled.div`
  width: 80%;
  max-width: 1395px;
  height: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: var(--color-green3);

  .card-doctors-header {
    display: flex;
    justify-content: space-between;

    h2 {
      margin-bottom: 20px;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--color-green3);
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button:hover {
      color: var(--color-green2);
    }
  }
`;
