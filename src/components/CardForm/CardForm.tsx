import SelectField from 'components/SelectField/SelectField'
import TextField from 'components/TextField/TextField'
import InputRow from 'ui/InputRow/InputRow'
import { optionsMonths, optionsYears } from 'utils/constants/expirationDate'
import styles from './CardForm.module.scss'

const CardForm = () => {
  return (
    <form>
      <div className={styles.container}>
        <InputRow label="Card Number">
          <TextField />
        </InputRow>
        <InputRow label="Card Holders">
          <TextField />
        </InputRow>
        <div className={styles.row}>
          <InputRow label="Expiration Date">
            <div className={styles.dateContainer}>
              <SelectField options={optionsMonths} />
              <SelectField options={optionsYears} />
            </div>
          </InputRow>
          <InputRow
            label="CVV"
            mainStyles={styles.cvvRow}
            containerStyles={styles.cvvContainer}
          >
            <TextField />
          </InputRow>
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CardForm
