import { FormContents } from "./FormContents";
import { Sidebar } from "./Sidebar";
import "./index.css";

const Component: React.FC = () => {
  return (
    <form className="form">
      <Sidebar />
      <FormContents />
    </form>
  );
};

export const Form = Component;
