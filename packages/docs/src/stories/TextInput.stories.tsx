import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@stellar-ds/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#4444' },
      ],
    },
  },
  args: {
    label: 'Label',
    variant: 'fullfilled',
  },
  argTypes: {
    variant: {
      options: ['fullfilled', 'underscored'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu nome',
  },
}

export const Underscored: StoryObj<TextInputProps> = {
  args: {
    variant: 'underscored',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'R$',
  },
}
