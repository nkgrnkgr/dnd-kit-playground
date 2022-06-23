import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  children: React.ReactNode;
};

export const Draggable: React.FC<Props> = ({ children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  // Dragして動かすためにいる。ないと動いているように見えない
  //const style = transform ? {
  // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  // } : undefined;
  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <button style={style} ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </button>
  );
};
