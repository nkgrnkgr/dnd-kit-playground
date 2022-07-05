import { UniqueIdentifier } from "@dnd-kit/core";
import { Container } from "./components/Container";

type Props = {
  children: React.ReactNode;
  id: UniqueIdentifier;
};

export const DroppableContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container columns={[]} hover={false}>
      {children}
    </Container>
  );
};
