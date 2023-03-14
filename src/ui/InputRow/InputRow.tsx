import cn from 'classnames'
import { IInputRowProps } from './InputRow.interface'
import styles from './InputRow.module.scss'

const InputRow = ({
  children,
  label,
  mainStyles,
  containerStyles,
}: IInputRowProps) => (
  <div className={cn(styles.row, mainStyles)}>
    <div className={cn(styles.fieldContainer, containerStyles)}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  </div>
)

export default InputRow
