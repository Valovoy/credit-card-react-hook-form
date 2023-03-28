import SelectField from 'components/SelectField/SelectField'
import TextField from 'components/TextField/TextField'
import InputRow from 'ui/InputRow/InputRow'
import { optionsMonths, optionsYears } from 'utils/constants/expirationDate'
import styles from './CardForm.module.scss'

import chip from 'assets/images/chip.png'
import visa from 'assets/images/visa.png'

const CardForm = () => {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardFront}>
            <div className={styles.cardImages}>
              <img src={chip} alt="chip" className={styles.chip} />
              <img src={visa} alt="visa" className={styles.typeCard} />
            </div>
            <div className={styles.cardNumber}>
              <span>#### #### #### ####</span>
            </div>
            <div className={styles.cardInfoContainer}>
              <div className={styles.cardInfo}>
                <span className={styles.label}>Card Holder</span>
                <span className={styles.info}>FULL NAME</span>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.label}>Expires</span>
                <span className={styles.info}>MM/YY</span>
              </div>
            </div>
          </div>
          {/* <div className={styles.cardBack}>
            <div className={styles.magneticStripe} />
            <div className={styles.cardInfo}>
              <span className={styles.label}>CVV</span>
              <div className={styles.cvvField} />
              <img src={visa} alt="visa" className={styles.typeCard} />
            </div>
          </div> */}
        </div>
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
