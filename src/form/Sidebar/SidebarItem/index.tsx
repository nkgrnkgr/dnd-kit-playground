import { Draggable } from "../../Dnd/Draggable";
import "./index.css";

type Props = {
  id: string;
  label: string;
};

const Component: React.FC<Props> = ({ id, label }) => {
  return (
    <Draggable id={id}>
      <div className="SidebarItem">{label}</div>
    </Draggable>
  );
};

export const SidebarItem = Component;
