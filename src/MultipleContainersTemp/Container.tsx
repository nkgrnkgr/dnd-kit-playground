import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { SortableItem } from "./SortableItem";

type Props = {
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
};

export const Container: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext id={id.toString()} items={items}>
      <div
        style={{ padding: "20px", margin: "20px", border: "1px solid #000" }}
        ref={setNodeRef}
      >
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};
