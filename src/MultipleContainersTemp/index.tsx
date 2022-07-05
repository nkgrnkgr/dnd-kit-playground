import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { SortableItem } from "./SortableItem";

// Document
// Storybook https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-multiple-containers--basic-setup
// Source https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/MultipleContainers.tsx

export const MultipleContainers: React.FC = () => {
  const ITEM_CONTAINER_IDS = ["A", "B", "C", "D"];
  const ITEMS: Record<string, string[]> = {
    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B3"],
    C: ["C1", "C2", "C3"],
    D: ["D1", "D2", "D3"],
  };
  return (
    <DndContext>
      <SortableContext items={ITEM_CONTAINER_IDS}>
        {ITEM_CONTAINER_IDS.map((containerId, index) => (
          <div style={{ padding: "10px" }} key={containerId}>
            {containerId}
            <SortableContext items={ITEMS[containerId]}>
              {ITEMS[containerId].map((item) => (
                <SortableItem key={item} id={item} />
              ))}
            </SortableContext>
          </div>
        ))}
      </SortableContext>
    </DndContext>
  );
};
