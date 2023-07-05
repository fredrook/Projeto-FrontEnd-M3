import styled from "styled-components";

export const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  width: 150px;
  height: 68px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 9999;

  button:hover {
    text-decoration: underline;
  }

  .btnEdit {
    display: flex;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    border: none;
    background: transparent;
    color: var(--color-green);

    .IconPerfil {
      margin-left: 10px;
      margin-right: 12px;
      width: 23px;
      height: 22px;
    }
  }

  .btnExit {
    display: flex;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    border: none;
    background: transparent;
    color: var(--color-green);

    .IconExit {
      margin-left: 10px;
      margin-right: 12px;
      width: 23px;
      height: 22px;
    }
  }
`;