import { FiStar } from "react-icons/fi";
import { Container, Tags } from "./styles";

export function Note() {
    return(
        <Container>
            <h1>Interestellar</h1>
            <span>
                <FiStar/>
                <FiStar/>
                <FiStar/>
                <FiStar/>
                <FiStar/>
            </span>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobr...</p>
            <div>
                <Tags>Ficão Cientifica</Tags>
                <Tags>Ficão Cientifica</Tags>
                <Tags>Ficão Cientifica</Tags>
            </div>
        </Container>
    )
}