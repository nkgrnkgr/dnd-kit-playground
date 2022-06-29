import { Droppable } from "../Dnd/Droppable";
import "./index.css";

const Component: React.FC = () => {
  return (
    <Droppable id="form-contents">
      <div className="FormContents">form contents</div>
    </Droppable>
  );
};

export const FormContents = Component;
