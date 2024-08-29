import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

export function Header() {
    return (
    <HeaderContainer>
      <nav>
        <span>LOGO</span>
        <div className="itensEsquerda">
        <NavLink to="/" title="timer">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24}/>
        </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}