import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input"
import { Container, Title, Search, Profile, ProfileButton } from "./styles";

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={signOut}>sair</button>
                </div>
                <ProfileButton to="/profile">
                    <img
                        src={avatarUrl}
                        alt={user.name}
                    />
                </ProfileButton>

            </Profile>
        </Container>
    )

}