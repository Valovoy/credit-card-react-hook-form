import { Controller } from 'react-hook-form'
import { ITextFieldProps } from './TextField.interface'
import styles from './TextField.module.scss'

const TextField = ({
  name,
  type = 'text',
  onInputFocus,
  dataset,
}: ITextFieldProps) => (
  <Controller
    name={name}
    defaultValue=""
    render={({ field: { onChange, value, name } }) => (
      <input
        type={type}
        className={styles.input}
        onChange={onChange}
        onFocus={onInputFocus}
        aria-label={dataset}
        value={value}
        name={name}
      />
    )}
  />
)

export default TextField
