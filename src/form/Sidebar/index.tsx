import { createSidebarItem } from "./constants";
import { SidebarItem } from "./SidebarItem";
import "./index.css";

const Component: React.FC = () => {
  const sideBarItems = createSidebarItem();
  return (
    <div className="Sidebar">
      {sideBarItems.map((item) => (
        <div className="SidebarItemWrapper" key={item.id}>
          <SidebarItem id={item.id.toString()} label={item.label} />
        </div>
      ))}
      <div className="SidebarItem">a</div>
    </div>
  );
};

export const Sidebar = Component;
