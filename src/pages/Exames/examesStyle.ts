import styled from "styled-components";

export const ContainerConteudo = styled.div`
      width: 80%;
      margin: 30px 0;
      display: flex;
      flex-direction: column;      
      align-items: center;
      overflow-y: auto;
     
      
      color: var(--color-green3);
      h2 {
       
        color: var(--color-green);
      }

      h3{
        color: var(--color-green3);
      }

      p{
        font-size: 12px;
      }

      .containerInforLab{
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 20px;
        flex-wrap: wrap;

      }

      .containerWarning{
        background-color: var(--color-green);
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 10px;
        
      }

      .containerWarning  span{
        font-size: 2em;
        color: var(--color-white);
      }

      .containerWarning h2{
        color: var(--color-white);
        font-size: 1em;
      }
`;


export const ContainerInfo = styled.div`
        display: flex;
        flex-direction: column; 
        align-items: center;
        width: 250px;
        margin: 10px;
        gap: 10px;
       
        

        img{
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
        }

`