import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$qgreen100',

        '&:not(:disabled):hover': {
          background: '$qgreen200',
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          backgroundColor: '$qgreen100',
          opacity: 0.4,
        },
      },

      secondary: {
        background: '$qblue900',
        color: '$white',

        '&:not(:disabled):hover': {
          color: '$qgray100',
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          color: '$qgray200',
          opacity: 0.4,
        },
      },

      tertiary: {
        background: '$qred100',
        color: '$white',

        '&:not(:disabled):hover': {
          color: '$white',
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          color: '$white',
          opacity: 0.4,
        },
      },

      quaternary: {
        background: '$qice100',
        color: '$qdarkGray100',

        '&:not(:disabled):hover': {
          color: '$qdarkGray100',
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          color: '$qdarkGray100',
          opacity: 0.4,
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
