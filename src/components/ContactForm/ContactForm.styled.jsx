import styled from '@emotion/styled';

export const FormEl = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 12px;

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    width: 250px;
    padding: 4px;
  }
  button {
    display: block;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    padding: 8px;
    border-radius: 6px;
    background-color: rgb(111, 142, 79);
    border: none;
    margin-top: 30px;
  }
`;
