import { FormContents } from "./FormContents";
import { Sidebar } from "./Sidebar";
import "./index.css";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const Component: React.FC = () => {
  const handleDragEnd = (event: DragEndEvent) => {
    //
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <form className="form">
        <Sidebar />
        <FormContents />
      </form>
    </DndContext>
  );
};

export const Form = Component;
