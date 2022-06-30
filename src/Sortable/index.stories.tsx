import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sortable } from "./";

export default {
  title: "Sortable",
  component: Sortable,
} as ComponentMeta<typeof Sortable>;

const Template: ComponentStory<typeof Sortable> = (args) => (
  <Sortable {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  //
};
