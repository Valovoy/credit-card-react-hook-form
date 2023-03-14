import Select from 'react-select'
import { ISelectFieldProps } from './SelectField.interface'
import styles from './SelectField.module.scss'

const SelectField = ({ options }: ISelectFieldProps) => {
  return (
    <div className={styles.container}>
      <Select
        options={options}
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            paddingLeft: 7,
            height: 40,
            borderColor: '#aeaaaa',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#aeaaaa',
            },
          }),
          indicatorSeparator: baseStyles => ({
            ...baseStyles,
            display: 'none',
          }),
          input: baseStyles => ({
            ...baseStyles,
            margin: 0,
            padding: 0,
          }),
          valueContainer: baseStyles => ({
            ...baseStyles,
            padding: 0,
          }),
        }}
      />
    </div>
  )
}

export default SelectField
