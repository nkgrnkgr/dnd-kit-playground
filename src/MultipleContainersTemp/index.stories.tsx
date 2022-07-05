import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MultipleContainers } from "./";

export default {
  title: "MultipleContainersTemp",
  component: MultipleContainers,
} as ComponentMeta<typeof MultipleContainers>;

const Template: ComponentStory<typeof MultipleContainers> = (args) => (
  <MultipleContainers {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  //
};
