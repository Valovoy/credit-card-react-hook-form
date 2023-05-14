export interface ITextFieldProps {
  name: string
  type?: string
  dataset: string
  onInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
}
