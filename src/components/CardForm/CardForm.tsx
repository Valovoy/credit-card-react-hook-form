import { useState } from 'react'
import SelectField from 'components/SelectField/SelectField'
import TextField from 'components/TextField/TextField'
import CardView from 'components/CardView/CardView'
import InputRow from 'ui/InputRow/InputRow'
import { optionsMonths, optionsYears } from 'utils/constants/expirationDate'
import styles from './CardForm.module.scss'

const CardForm = () => {
  const [focusFieldName, setFocusFieldName] = useState<string | null>(null)

  const onInputFocus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFocusFieldName(e.target.ariaLabel)
  }

  return (
    <form>
      <div className={styles.container}>
        <CardView focusFieldName={focusFieldName} />
        <InputRow label="Card Number">
          <TextField onInputFocus={onInputFocus} dataset="cardNumber" />
        </InputRow>
        <InputRow label="Card Holders">
          <TextField onInputFocus={onInputFocus} dataset="cardHolder" />
        </InputRow>
        <div className={styles.row}>
          <InputRow label="Expiration Date">
            <div className={styles.dateContainer}>
              <SelectField
                options={optionsMonths}
                onInputFocus={onInputFocus}
              />
              <SelectField options={optionsYears} onInputFocus={onInputFocus} />
            </div>
          </InputRow>
          <InputRow
            label="CVV"
            mainStyles={styles.cvvRow}
            containerStyles={styles.cvvContainer}
          >
            <TextField onInputFocus={onInputFocus} dataset="cardCVV" />
          </InputRow>
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CardForm
