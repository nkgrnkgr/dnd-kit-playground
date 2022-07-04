type Props = {
  children: React.ReactNode;
  hover: boolean;
  columns: number[];
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
