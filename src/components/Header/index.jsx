import { FiSearch } from "react-icons/fi";
import { Container, Title, Search, Profile } from "./styles";
import { Input } from "../Input"

export function Header() {

    return (
        <Container>
            <Title>Rocket Movies</Title>
            
            <Search>
                <Input 
                    placeholder="Pesquisar pelo título"
                    type="text"
                    icon={FiSearch}
                />
            </Search>
            
            <Profile to="/profile">
                <div>
                    <strong>Breno Chiori</strong>
                    <span>sair</span>
                </div>
                <img
                    src="https://github.com/BrenoChiori.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    )

}