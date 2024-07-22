import { useState, useEffect } from 'react'
import { FiArrowLeft } from "react-icons/fi"
import { Container, Section, SectionMain, DataUser, TagSections, TextSection } from "./styles"
import { Link, useParams } from "react-router-dom"

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tags"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <Section>
          <span>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </span>
          <SectionMain>
            <div>
              <h1>{data.title}</h1>
              <span>
                <Rating rating={data.rating} />
              </span>
            </div>

            <DataUser>
              <p>Por Demo</p>
              <p>{data.created_at}</p>
            </DataUser>

            {
              data.tags &&
              <TagSections>
                { 
                  data.tags.map(tag => (
                    <Tag 
                      key={tag.id}
                      title={tag.name} 
                    />
                  ))
                }
              </TagSections>
            }

            <TextSection>{data.description}</TextSection>
          </SectionMain>
        </Section>
      }
    </Container>
  )
}