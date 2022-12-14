import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: #000;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: #404040;
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FFF" : "#fffdez")};
  display: flex;
  justify-content: center;
  align-items: center;

  .imgIcon {
    width: 2rem;
    height: 2rem;
    color: #fff;
  }
`;

export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border: 3px solid #000;
  border-radius: 50%;
  margin: 0 -6px 0 30px;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
`;
