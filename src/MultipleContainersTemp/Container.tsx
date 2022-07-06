import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";

type Props = {
  id: UniqueIdentifier;
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ id, children }) => {
  const { attributes, transform, transition, listeners, setNodeRef } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
