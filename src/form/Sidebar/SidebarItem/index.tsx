import { Draggable } from "../../Dnd/Draggable";
import "./index.css";

type Props = {
  label: string;
};

const Component: React.FC<Props> = ({ label }) => {
  return (
    <Draggable>
      <div className="SidebarItem">{label}</div>
    </Draggable>
  );
};

export const SidebarItem = Component;
