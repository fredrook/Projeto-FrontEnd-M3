import styled from "styled-components";

export const UnidadeContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  flex-wrap: wrap;
  flex-direction: row;

  .container {
    display: flex;
    width: 100%;
    gap: 2vw;
    padding: 2vw;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .units-title {
    font-size: 20px;
    color: var(--color-green);
    margin-top: 1vw;
  }

  h2 {
    font-size: 16px;
    color: var(--color-green);  
    margin-top: 1em; 
  }

  p {
    font-size: 14px;
    margin-top: 1em;   
  }

  @media (max-width: 400px) {
    .units-title {
      font-size: 16px;
    }

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const ContainerInfoUnid = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  width: 320px;

  ul {
    list-style: none;
    margin-top: 1vw;
  }
  li {
    display: flex;
    font-size: 14px;
  }
  h3 {
    font-size: 16px;
    color: var(--color-green);
  }
  @media (max-width: 400px) {
    li {
      font-size: 12px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export const ContainerImgUnid = styled.div`
  max-width: 600px;
  width: 100%;

  @media (max-width: 400px) {
    max-width: 320px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;