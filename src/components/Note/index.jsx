import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tag } from "../Tags";

export function Note({ data, ...rest }) {
    const truncateDescription = (text, maxLength = 400) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <span>
                < Rating rating={data.rating} />
            </span>
            <p>{truncateDescription(data.description)}</p>

            {
                data.tags &&
                <div>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </div>
            }


        </Container>
    )
}