import styled from "styled-components";

interface IHeaderProps {
  login: boolean;
}

export const TagHeader = styled.header<IHeaderProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.login ? "column" : null)};
  min-height: ${(props) => (props.login ? "250px" : "415px")};
  gap: ${(props) => (props.login ? "20px" : null)};
  background: var(--bg-color-linear);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 768px) {
    align-items: ${(props) => (props.login ? "center" : "unset")};
  }

  > .container {
    width: 90%;
    max-width: 1200px;
    height: ${(props) => (props.login ? "125px" : "400px")};
    margin-top: ${(props) => (!props.login ? "40px" : null)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 48px;
    }

     a {
      background: transparent;
      border: none;
      cursor: pointer;

      > img {
       width: 188px;
       height: 32px;
       margin-bottom: 10px;
     }
      
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  .container-buttons {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.login ? "center" : "space-between")};
    align-items: center;
    height: 290px;
    gap: 10px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 48px;
    }
  }

  .container-info {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 60%;

    @media screen and (min-width: 768px) {
      align-items: center;
      height: 100%;
    }

    > img {
      scale: 0.7;
      top: -7px;
      position: absolute;

      @media screen and (min-width: 768px) {
        scale: 1;
        position: relative;
      }
    }

    > h2 {
      display: none;
      font-size: 36px;
      color: var(--color-green3);
      width: 226px;

      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
`;