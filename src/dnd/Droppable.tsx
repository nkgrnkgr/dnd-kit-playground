import { useDroppable } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
};

export const Droppable: React.FC<Props> = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
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
