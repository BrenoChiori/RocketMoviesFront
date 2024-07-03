import { FiArrowLeft } from "react-icons/fi";
import { Container, Section, AddTags, SectionMain, ButtonSection } from "./styles";
import { Link } from "react-router-dom";


import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'

export function New() {
    return (
        <Container>
            <Header />
            <Section>
                <span>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>
                </span>
                <SectionMain>
                
                    <h1>Novo filme</h1>

                <div>
                    <Input 
                        type="text"
                        placeholder="Título"
                    />
                    <Input
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </div>

                <TextArea placeholder="Observações"/>

                <h3>Marcadores</h3>

                <AddTags>
                    <NoteItem value="Romance" />
                    <NoteItem isNew placeholder="Nova tag" />
                </AddTags>

                <ButtonSection className={"divButtons"}>
                    <Button 
                        title="Excluir filme"
                        className={"deleteButton"}
                    />
                    <Button
                        title="Salvar alterações"
                    />
                </ButtonSection>
                </SectionMain>
            </Section>

        </Container>
    )
}