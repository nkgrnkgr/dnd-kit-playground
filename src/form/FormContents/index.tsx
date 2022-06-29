import { Droppable } from "../Dnd/Droppable";
import "./index.css";

const Component: React.FC = () => {
  return (
    <Droppable className="FormContents" id="form-contents">
      <div>form contents</div>
    </Droppable>
  );
};

export const FormContents = Component;
