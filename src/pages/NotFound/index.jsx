import { Container } from "./styles";

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <p>A página que você tentou acessar não existe ou não está disponível!</p>
      <a href="/">Voltar para a Página Inicial</a>
    </Container>
  );
}
