import { MainDivContainer } from "./App.styles";
import { Button } from "./components/Button";

export function App() {
  return (
    <MainDivContainer>
      <Button bgColor="primary" />
      <Button bgColor="secondary" />
      <Button bgColor="danger" />
      <Button bgColor="success" />
      <Button />
    </MainDivContainer>
  );
}
