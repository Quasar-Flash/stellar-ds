import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',
  backgroundColor: '$white',

  variants: {
    variant: {
      fullfilled: {
        border: '2px solid $gray900',
      },

      underscored: {
        padding: '$3 $2',
        backgroundColor: 'transparent',
        borderBottom: '2px solid $qgray600',
        borderRadius: 'unset',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$qgray900',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$qgray950',
  fontWeight: 'regular',
})

export const Label = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$qgray950',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$qgray950',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$qgray650',
  },
})
