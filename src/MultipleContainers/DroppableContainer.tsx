import { Container } from "./components/Container";

type Props = {
  children: React.ReactNode;
};

export const DroppableContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container columns={[]} hover={false}>
      {children}
    </Container>
  );
};
