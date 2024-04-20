import { styled } from "../../../styled-system/jsx";

export const Section = styled.section`
  background-image: url("/images/image-background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: green;
  border: 1px solid #000;
  color: #000;
  padding: 0.5rem 1rem;
`;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 72px;
  font-weight: bold;
  color: white;
`;

export const Text = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  white-space: pre-wrap;
  color: white;
`;

export const Description = styled.div`
  padding: 0 20vh;
  box-sizing: border-box;
`;

export const DateInputBox = styled.div`
  background-color: white;
  display: flex;
  box-sizing: border-box;
  gap: 12px;
`;

export const DateInput = styled.input`
  background-color: white;

  flex-direction: column;
  margin-left: 10vh;
  box-sizing: border-box;
  gap: 24px;
`;
