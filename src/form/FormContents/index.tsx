import { Droppable } from "../Dnd/Droppable";
import { Content } from "../types/Content";
import { FormContentsItem } from "./FormContentsItem";
import "./index.css";

type Props = {
  contents: Content[];
};

const Component: React.FC<Props> = ({ contents }) => {
  return (
    <Droppable className="FormContents" id="form-contents">
      {contents.map((content) => (
        <FormContentsItem key={content.id} {...content} />
      ))}
    </Droppable>
  );
};

export const FormContents = Component;
