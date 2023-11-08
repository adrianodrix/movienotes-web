import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Top, ButtonAdd, Notes } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

export function Home() {
  const notes = []
  
  return (
    <Container>
      <Header>
        <Input
          className="search only-in-desktop"
          placeholder="Pesquisar pelo título"
        />
        <button
          className="mobile-search"
          type="button"
        >
          <FiSearch />
        </button>
      </Header>
      <main>
        <Wrapper>
          <Top>
            <h1>Meus filmes</h1>
            <ButtonAdd to="/new">
              <FiPlus /> Adicionar filme
            </ButtonAdd>
          </Top>
          <Notes>
            {notes.length == 0 ? (
              <h2>Nenhum filme encontrado</h2>
            ) : (
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                />
              ))
            )}
          </Notes>
        </Wrapper>
      </main>
    </Container>
  );
}
