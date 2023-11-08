import { FiClock, FiArrowLeft } from "react-icons/fi";

import { Container, Top, Infos, Buttons } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Wrapper>
          <Top>
            <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            <div className="highlight">
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>
            <Infos>
              <div className="user-infos">
                <img src='http://github.com/adrianodrix.png' alt='avatar' />
                <p>Por Adriano Santos</p>
              </div>

              <div className="note-infos">
                <FiClock />
                {dateFormatted && (
                  <p>
                    {dateFormatted.date} ás {dateFormatted.hour}
                  </p>
                )}
              </div>
            </Infos>
          </Top>
          {data.tags && (
            <div className="tags">
              {data.tags.map(tag => (
                <Tag name={tag.name} key={tag.id} />
              ))}
            </div>
          )}
          {data.description && (
            <p className="description">{data.description}</p>
          )}
          <Buttons>
            <Button
              title="Excluir filme"
              highlighted={false}
            />
            <Button title="Editar filme"/>
          </Buttons>
        </Wrapper>
      </main>
    </Container>
  );
}
