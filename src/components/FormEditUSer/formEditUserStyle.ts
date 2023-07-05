import styled from "styled-components";

export const EditUserDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 95%;
  max-width: 500px;
  background-color: var(--color-white);
  border-radius: 4px;

  .spanRegister {
    color: var(--color-green);
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 15px;
    height: 28px;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: grey;
    margin-top: 10px;
  }

  .errorRegister {
    display: flex;
    font-size: 0.8rem;
    align-self: baseline;
    align-items: center;
    padding-left: 12px;
    margin-bottom: 5px;
    color: red;
    gap: 5px;
  }

  .inputRegister {
    height: 48px;
    width: 95%;
    margin-bottom: 10px;
    background-color: var(--color-grey);
    color: var(--color-green3);
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    padding: 0 3%;

    :focus {
      border: 1px solid var(--color-green2);
    }
  }

  .btnRegister {
    background-color: var(--color-green);
    width: 95%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    margin: 20px 0;
  }
  .btnRegister:hover {
    background: var(--color-green2);
  }

  label {
    display: flex;
    align-items: center;
    width: 95%;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-green3);
    margin-bottom: 8px;
    padding: 0 0 0 10px;
  }
`;