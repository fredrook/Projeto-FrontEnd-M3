import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 38px;
  background: var(--color-grey);
  color: var(--color-fontescura);
  gap: 10px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-green3);

  button {
    border-radius: 25px;
    border: none;
    padding: 0px 14px;
  }

  button:focus {
    background-color: var(--color-green);
    color: var(--color-white);
    height: 100%;
    border-radius: 25px;
  }
`;