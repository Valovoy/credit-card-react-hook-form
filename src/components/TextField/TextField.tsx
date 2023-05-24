import { Controller } from 'react-hook-form'
import cn from 'classnames'
import { ITextFieldProps } from './TextField.interface'
import styles from './TextField.module.scss'

const TextField = ({
  name,
  type = 'text',
  onInputFocus,
  dataset,
  maxLength,
  minLength,
}: ITextFieldProps) => (
  <Controller
    name={name}
    defaultValue=""
    render={({ field: { onChange, value, name }, fieldState: { error } }) => (
      <>
        <input
          type={type}
          className={cn(styles.input, error && styles.error)}
          onChange={onChange}
          onFocus={onInputFocus}
          aria-label={dataset}
          value={value}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
        />
        {error && <span className={styles.errorMsg}>{error.message}</span>}
      </>
    )}
  />
)

export default TextField
