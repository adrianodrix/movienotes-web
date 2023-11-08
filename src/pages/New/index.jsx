import { FiArrowLeft } from "react-icons/fi";

import { Container, Inputs, TextArea, Buttons } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function New() {
  const tags = []

  return (

    <Container>
      <Header />
      <main>
        <Wrapper>
          <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
          <h1>Novo filme</h1>
          <Inputs>
            <Input
              placeholder="Título"
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />
          </Inputs>
          <TextArea
            placeholder="Observações"
          />
          <h2>Marcadores</h2>
          <section className="note-items">
            {tags.map((tag, index) => (
              <NoteItem
                key={`${tag}-${index}`}
                value={tag}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Nova tag"
            />
          </section>
          <Buttons>
            <Button
              title="Descartar alterações"
              highlighted={false}
            />
            <Button title="Salvar alterações"  />
          </Buttons>
        </Wrapper>
      </main>
    </Container>
  );
}
