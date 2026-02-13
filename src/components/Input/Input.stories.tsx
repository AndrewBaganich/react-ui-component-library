import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import React from 'react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
    disabled: false,
    value: '',
    defaultValue: '',
    clearable: false,
    label: '',
    error: '',
  },
}