import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffdee9;
  color: #000;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 2px solid #fff;
`;

export const Page = styled.div`
  flex: 1;
  padding: 2.5rem 0 0 2.5rem;
`;