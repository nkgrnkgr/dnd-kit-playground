import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const Component: React.FC = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (e: DragEndEvent) => {
    if (e.over && e.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? <DraggableComponent /> : null}
      <Droppable>{isDropped ? <DraggableComponent /> : "Drop here"}</Droppable>
    </DndContext>
  );
};

const DraggableComponent: React.FC = () => {
  return <Draggable>Drag me</Draggable>;
};

export const Dnd = Component;
