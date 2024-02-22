import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { UserContextProvider } from "./contexts/UserContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </UserContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
