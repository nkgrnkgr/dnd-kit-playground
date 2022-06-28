import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import "./index.css";

const Component: React.FC = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (e: DragEndEvent) => {
    const { over } = e;
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? <DraggableComponent /> : null}

      {containers.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? <DraggableComponent /> : "Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );
};

const DraggableComponent: React.FC = () => {
  return (
    <Draggable>
      <div className="draggable">Drag me</div>
    </Draggable>
  );
};

export const Dnd = Component;
