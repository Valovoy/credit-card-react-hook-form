interface IOption {
  value: string | number
  label: string
}

export interface ISelectFieldProps {
  options: IOption[]
  onInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
}
