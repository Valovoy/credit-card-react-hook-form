import { ITextFieldProps } from './TextField.interface'
import styles from './TextField.module.scss'

const TextField = ({ onInputFocus, dataset }: ITextFieldProps) => (
  <input
    className={styles.input}
    onFocus={onInputFocus}
    aria-label={dataset}
  />
)

export default TextField
