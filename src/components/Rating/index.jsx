import { IoStar, IoStarOutline  } from "react-icons/io5";
import { Container } from "./styles";

export function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <Container>
      {stars.map(star => (
        <span key={star}>
          {rating >= star ? <IoStar /> : <IoStarOutline />}
        </span>
      ))}
    </Container>
  );
}