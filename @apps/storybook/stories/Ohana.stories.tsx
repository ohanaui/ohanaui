import {
  ohana,
  OhanaElement,
  ohanaElements,
  OhanaProps,
} from "@ohanaui/ohanaui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<OhanaProps<"div"> & { element: OhanaElement }> = {
  args: {
    children: "Ohana",
    element: "div",
  },
  argTypes: {
    element: {
      control: "select",
      options: ohanaElements,
    },
  },
  component: ohana.div,
  render: ({ children, element }) => {
    const OhanaElement = ohana[element];

    return (
      <ohana.div>
        <ohana.span
          style={{ color: "blue", display: "block" }}
        >{`<${element}>`}</ohana.span>
        <OhanaElement style={{ marginLeft: "1rem" }}>{children}</OhanaElement>
        <ohana.span
          style={{ color: "blue", display: "block" }}
        >{`<${element}>`}</ohana.span>
      </ohana.div>
    );
  },
  title: "Ohana",
};

export default meta;

type Story = StoryObj<OhanaProps<"div">>;

export const Default: Story = {};
