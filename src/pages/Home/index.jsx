import { FiPlus } from "react-icons/fi";
import { Container, SectionMain, ButtonNew, Content } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

export function Home() {
    return(
        <Container>
            <Header />
            <SectionMain>
                <div>
                <h1>Meus filmes</h1>
                <ButtonNew to='/new'>
                        <FiPlus />
                        Adicionar filme
                </ButtonNew>
                </div>

                <Content>
                    <Note />
                    <Note />
                    <Note />
                </Content>
            </SectionMain>
        </Container>
    )
}