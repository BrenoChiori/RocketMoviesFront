import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Container, SectionMain, ButtonNew, Content } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function Home() {
    const note = []
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(
                `/notes?title=${note}`
            )
            setNotes(response.data)
        }

        fetchNotes()
    }, [note])

    return (
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
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Content>
            </SectionMain>
        </Container>
    )
}