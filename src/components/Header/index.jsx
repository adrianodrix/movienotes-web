import { Link } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";
import { Wrapper } from "../Wrapper";

export function Header({ children }) {
  return (
    <Container>
      <Wrapper>
        <Link to="/" className="only-in-desktop">
          <h2>Movienotes</h2>
        </Link>
        {children}
        <Profile>
          <div>
            <p>Adriano Santos</p>
            <Logout type="button">
              Sair
            </Logout>
          </div>
          <Link to="/profile">
            <img src='http://github.com/adrianodrix.png' alt='avatar' />
          </Link>
        </Profile>
      </Wrapper>
    </Container>
  );
}
