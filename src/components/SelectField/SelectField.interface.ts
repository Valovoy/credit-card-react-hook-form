interface IOption {
  value: string | number
  label: string
}

export interface ISelectFieldProps {
  name: string
  options: IOption[]
  onInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
}
