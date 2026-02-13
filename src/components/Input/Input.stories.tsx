import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import React from 'react'

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const Small: Story = {
  args: {
    placeholder: "Small input",
    size: "sm",
  },
  render: (args) => {
    const [val, setVal] = React.useState("");
    return (
      <Input
        {...args}
        value={val}
        onChange={setVal}
      />
    );
  },
};

export const Medium: Story = {
  args: {
    placeholder: "Medium input",
    size: "md"
  },
   render: (args) => {
    const [val, setVal] = React.useState("");
    return (
      <Input
        {...args}
        value={val}
        onChange={setVal}
      />
    );
  },
}

export const Large: Story = {
  args: {
    placeholder: "Large input",
    size: "lg"
  },
   render: (args) => {
    const [val, setVal] = React.useState("");
    return (
      <Input
        {...args}
        value={val}
        onChange={setVal}
      />
    );
  },
}