import "./index.css";

type Props = {
  id: string;
  label: string;
};

const Component: React.FC<Props> = ({ id, label }) => {
  return <div className="FormContents">{label}</div>;
};

export const FormContentsItem = Component;
