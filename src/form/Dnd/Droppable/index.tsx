import { useDroppable } from "@dnd-kit/core";
import { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export const Droppable: React.FC<Props> = ({ children, id, className }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style: CSSProperties = {
    backgroundColor: isOver ? "aqua" : undefined,
  };

  return (
    <div className={className} ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
