import { useDroppable } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Droppable: React.FC<Props> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
