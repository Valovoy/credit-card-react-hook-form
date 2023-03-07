import Select from 'react-select'
import styles from './CardForm.module.scss'

const CardForm = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <form>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.fieldContainer}>
            <span className={styles.label}>Card Number</span>
            <input />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fieldContainer}>
            <span className={styles.label}>Card Holders</span>
            <input />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fieldContainer}>
            <span className={styles.label}>Expiration Date</span>
            <Select options={options} />
          </div>
          <div className={styles.fieldContainer}>
            <span className={styles.label}>CVV</span>
            <input />
          </div>
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CardForm
