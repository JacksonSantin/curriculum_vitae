import styled from 'styled-components';

export const Heading = styled.h1`
   text-align: center;
   color: #d9a000;
`;

export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

export const Button = styled.div`
   position: fixed; 
   right: 22px;
   bottom: 60px;
   height: 0;
   font-size: 2.5rem;
   opacity: 0.5;
   z-index: 1;
   cursor: pointer;
   color: #cccccc;
`;