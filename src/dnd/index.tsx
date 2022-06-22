import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const Component: React.FC = () => {
  return (
    <DndContext>
      <Droppable>
        <div>this is droppable</div>
      </Droppable>
      <Draggable>
        <div>this is draggable</div>
      </Draggable>
    </DndContext>
  );
};

export const Dnd = Component;
