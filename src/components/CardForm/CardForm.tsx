import { useState } from 'react'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { cardFormResolver as resolver } from 'utils/schema/cardSchema'
import SelectField from 'components/SelectField/SelectField'
import TextField from 'components/TextField/TextField'
import CardView from 'components/CardView/CardView'
import InputRow from 'ui/InputRow/InputRow'
import { optionsMonths, optionsYears } from 'utils/constants/expirationDate'
import { ICardFormFields } from './CardForm.interface'
import styles from './CardForm.module.scss'

const CardForm = () => {
  const [focusFieldName, setFocusFieldName] = useState<string | null>(null)

  const methods = useForm<ICardFormFields>({ resolver })

  const onInputFocus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFocusFieldName(e.target.ariaLabel)
  }

  const onSubmit: SubmitHandler<ICardFormFields> = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <CardView focusFieldName={focusFieldName} />
          <InputRow label="Card Number">
            <TextField
              onInputFocus={onInputFocus}
              dataset="cardNumber"
              name="cardNumber"
              type="number"
            />
          </InputRow>
          <InputRow label="Card Holders">
            <TextField
              onInputFocus={onInputFocus}
              dataset="cardHolder"
              name="cardHolder"
            />
          </InputRow>
          <div className={styles.row}>
            <InputRow label="Expiration Date">
              <div className={styles.dateContainer}>
                <SelectField
                  options={optionsMonths}
                  onInputFocus={onInputFocus}
                  name="month"
                />
                <SelectField
                  options={optionsYears}
                  onInputFocus={onInputFocus}
                  name="year"
                />
              </div>
            </InputRow>
            <InputRow
              label="CVV"
              mainStyles={styles.cvvRow}
              containerStyles={styles.cvvContainer}
            >
              <TextField
                onInputFocus={onInputFocus}
                dataset="cardCVV"
                name="cvv"
                type="number"
              />
            </InputRow>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default CardForm
