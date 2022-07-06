import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { Container } from "./Container";
import { SortableItem } from "./SortableItem";

// Document
// Storybook https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-multiple-containers--basic-setup
// Source https://github.com/clauderic/dnd-kit/blob/master/stories/2%20-%20Presets/Sortable/MultipleContainers.tsx

// export const MultipleContainers: React.FC = () => {
//   const ITEM_CONTAINER_IDS = ["A", "B", "C", "D"];
//   const ITEMS: Record<string, string[]> = {
//     A: ["A1", "A2", "A3"],
//     B: ["B1", "B2", "B3"],
//     C: ["C1", "C2", "C3"],
//     D: ["D1", "D2", "D3"],
//   };
//   return (
//     <DndContext>
//       <SortableContext items={ITEM_CONTAINER_IDS}>
//         {ITEM_CONTAINER_IDS.map((containerId, index) => (
//           <div
//             style={{ padding: "10px", margin: "5px", border: "1px solid" }}
//             key={containerId}
//           >
//             {containerId}
//             <SortableContext items={ITEMS[containerId]}>
//               {ITEMS[containerId].map((item) => (
//                 <SortableItem key={item} id={item} />
//               ))}
//             </SortableContext>
//           </div>
//         ))}
//       </SortableContext>
//     </DndContext>
//   );
// };

export const MultipleContainers: React.FC = () => {
  const [itemIdsA, setItemIdsA] = useState(["A1", "A2", "A3"]);
  const [itemIdsB, setItemIdsB] = useState(["B1", "B2", "B3"]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over) {
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" }}>
          <SortableContext items={itemIdsA}>
            <Container id={"A"}>
              {itemIdsA.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </Container>
          </SortableContext>
        </div>
        <div style={{ margin: "10px" }}>
          <SortableContext items={itemIdsB}>
            <Container id={"B"}>
              {itemIdsB.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </Container>
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};
