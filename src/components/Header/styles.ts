import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 0;

  nav {
    display: flex;
    gap: 12px;

    a {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px;
      border-radius: 6px;
      text-decoration: none;

      font-size: 1.4rem;
      transition: background 0.2s, color 0.2s;
    }

    a:nth-child(1) {
      color: ${(props) => props.theme["purple-dark"]};
      background: ${(props) => props.theme["purple-light"]};

      &:hover {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.purple};
      }
    }

    a:nth-child(2) {
      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};

      &:hover {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.yellow};
      }
    }
  }
`;
