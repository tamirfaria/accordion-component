import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90vh;
  background: #fff;
`;

export const Container = styled.div`
  position: absolute;
  top: 15%;
  margin-bottom: 20px;
`;

export const Component = styled.div`
  margin-bottom: 24px;
`;

export const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  text-align: center;
  cursor: pointer;
  border-top-right-radius: 16px;
  z-index: 2;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.6);
  h1 {
    padding: 1rem;
    font-family: "Courier New", Courier, monospace;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const DropDown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  border-bottom-left-radius: 16px;
  animation: open-accordion 1s;
  z-index: 2;
  p {
    font-size: 1rem;
    font-family: "Courier New", Courier, monospace;
    padding: 1rem 2rem;
  }
  @keyframes open-accordion {
    from {
      opacity: 0;
      transform: translateY(-100px);
      max-height: 0;
      transition-delay: 0.5s;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: auto;
      transition-delay: 0.2s;
      z-index: 1;
    }
  }
`;
