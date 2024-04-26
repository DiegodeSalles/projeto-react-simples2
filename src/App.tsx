import { ThemeProvider } from "styled-components";
import { MainDivContainer } from "./App.styles";
import { Button } from "./components/Button";
import { defaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <MainDivContainer>
      <ThemeProvider theme={defaultThemes}>
        <Button bgColor="primary" />
        <Button bgColor="secondary" />
        <Button bgColor="danger" />
        <Button bgColor="success" />
        <Button />

        <GlobalStyle />
      </ThemeProvider>
    </MainDivContainer>
  );
}
