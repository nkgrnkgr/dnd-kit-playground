import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState } from "react";
import { SortableItem } from "./components/SortableItem";
import { DroppableContainer } from "./DroppableContainer";
import "./index.css";
import { coordinateGetter as multipleContainersCoordinateGetter } from "./multipleContainersKeyboardCoordinates";

const PLACEHOLDER_ID = "placeholder";

// Document
// Storybook https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-multiple-containers--basic-setup
// Source https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/MultipleContainers.tsx

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

export const MultipleContainers: React.FC = () => {
  const [items, setItems] = useState<Items>({
    A: ["A1", "A2", "A3", "A4"],
    B: ["B1", "B2", "B3", "B4"],
    C: ["C1", "C2", "C3", "C4"],
  });

  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[]
  );

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: multipleContainersCoordinateGetter,
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
      <div className="multiple-containers">
        <SortableContext
          items={[...containers, PLACEHOLDER_ID]}
          strategy={verticalListSortingStrategy}
        >
          {containers.map((containerId) => (
            <DroppableContainer key={containerId} id={containerId}>
              {
                <SortableContext
                  items={items[containerId]}
                  strategy={verticalListSortingStrategy}
                >
                  {items[containerId].map((value, index) => {
                    return <SortableItem key={value} id={value} />;
                  })}
                </SortableContext>
              }
            </DroppableContainer>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
