import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Section, AddTags, SectionMain, ButtonSection } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'

import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o nome do filme para salvar")
        }

        if(!rating || rating > 5) {
            return alert("Dê uma nota para o filme entre entre 0 e 5")
        }

        if(newTag) {
            return alert("Você deixxo uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio")
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        })

        alert("Nota criada com sucesso!")
        navigate("/")
    }

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
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={e => setRating(e.target.value)}
                    />
                </div>

                <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                />

                <h3>Marcadores</h3>

                <AddTags>
                    {
                        tags.map((tag, index) => (
                            <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />
                        ))
                    }

                    <NoteItem 
                        isNew 
                        placeholder="Nova tag"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                    />
                </AddTags>

                <ButtonSection className={"divButtons"}>
                    <Button 
                        title="Excluir filme"
                        className={"deleteButton"}
                    />
                    <Button
                        title="Salvar alterações"
                        onClick={handleNewNote}
                    />
                </ButtonSection>
                </SectionMain>
            </Section>

        </Container>
    )
}