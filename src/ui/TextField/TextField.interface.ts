export interface ITextFieldProps {
  name: string
  type?: string
  maxLength?: number
  minLength?: number
  dataset: string
  onInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFormatValue?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => React.ChangeEvent<HTMLInputElement>
}
