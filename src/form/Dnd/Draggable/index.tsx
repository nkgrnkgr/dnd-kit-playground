import { useDraggable } from "@dnd-kit/core";
import "./index.css";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Draggable: React.FC<Props> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  // Dragして動かすためにいる。ないと動いているように見えない
  //const style = transform ? {
  // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  // } : undefined;
  // Utilを使うとDrag中にScaleも変更される
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className="draggable"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
};
