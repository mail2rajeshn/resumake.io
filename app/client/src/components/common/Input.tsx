import { InputHTMLAttributes, memo, FC } from 'react'
import { FieldPath, UseFormReturn } from 'react-hook-form'
import styled from 'styled-components'
import { colors } from '../../theme'
import { FormValues } from '../../types/form'

const StyledInput = styled.input`
  border: none;
  background: ${colors.input};
  padding: 1rem;
  color: ${colors.white};
  transition: all 0.2s ease;
  border-radius: 10px;
  font-size: 0.85rem;

  &:focus {
    outline: 0;
    border-color: ${colors.primary};
    box-shadow: 0 0 4px 1px ${colors.primary};
    &::placeholder {
      color: #c0c5ce;
      opacity: 0.3;
    }
  }

  &::placeholder {
    color: white;
    opacity: 0;
  }
`

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  formContext: UseFormReturn<FormValues>
  name: FieldPath<FormValues>
}

export const Input: FC<InputProps> = memo(
  ({ formContext, name, ...inputProps }) => (
    <StyledInput {...inputProps} {...formContext.register(name)} />
  ),
  (prevProps, nextProps) =>
    prevProps.formContext.formState.isDirty ===
    nextProps.formContext.formState.isDirty
)