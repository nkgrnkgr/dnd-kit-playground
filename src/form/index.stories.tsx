import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./";

export default {
  title: "Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  //
};
