import styled from "styled-components";

export const ListDoctors = styled.ul`
  list-style: none;
  color: var(--color-white);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    background-color: var(--color-green);
    width: 267px;
    height: 150px;
    color: var(--color-white);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;   
  }

  .doctorName {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 0;   
  }

  h4{
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
    
  }
  h3 {
    font-size: 14px;
    font-weight: 500;    
  }
  .containerHeader {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;   
  }
  .containerHeader button {
    background-color: transparent;
    border: none;
    color: var(--color-white);
    font-size: 12px;
  }

  .containerHeader button:hover{
    color: var(--color-green2);
  }
  .containerDataAppointment{
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;

  }
  .containerDataAppointment span{
    margin-right: 10px;
    font-size: 14px;
  }

  .containerIcon{
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerCardAppointment = styled.div`
  width: 95%;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  color: var(--color-green3);

  @media screen and (min-width: 1440px) {
    max-width: 1395px;
    height: 100%;
  }

  h2 {
    margin-bottom: 20px;
  }
`;