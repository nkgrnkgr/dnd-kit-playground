import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { FormContents } from "./FormContents";
import "./index.css";
import { Sidebar } from "./Sidebar";
import { Content } from "./types/Content";

const Component: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (over) {
      const newContent = {
        id: active.id.toString(),
        label: `item-${active.id.toString()}`,
      };

      setContents([...contents, newContent]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="form">
        <Sidebar />
        <FormContents contents={contents} />
      </div>
    </DndContext>
  );
};

export const Form = Component;
