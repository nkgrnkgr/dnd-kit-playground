type SidebarItem = {
  id: number;
  label: string;
};

export const createSidebarItem = () => {
  const sideBarItems: SidebarItem[] = [];

  for (let index = 1; index <= 24; index++) {
    sideBarItems.push({
      id: index,
      label: `item-${index}`,
    });
  }

  return sideBarItems;
};
