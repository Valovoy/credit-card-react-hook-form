import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { ISelectFieldProps } from './SelectField.interface'
import styles from './SelectField.module.scss'

const MAX_MENU_HEIGHT = 200

const SelectField = ({ name, options, onInputFocus }: ISelectFieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      render={({ field: { onChange, name } }) => (
        <div className={styles.container}>
          <Select
            onChange={val => onChange(val?.value)}
            options={options}
            name={name}
            maxMenuHeight={MAX_MENU_HEIGHT}
            onFocus={onInputFocus}
            aria-label="cardExpires"
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
      )}
    />
  )
}

export default SelectField
