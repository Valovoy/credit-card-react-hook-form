import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const cardFormSchema = yup
  .object()
  .shape({
    cardNumber: yup
      .number()
      .typeError('The field cannot be left blank.')
      .required(),
    cardHolder: yup.string().required().label('Card holder'),
    month: yup.number().typeError('The field cannot be left blank.').required(),
    year: yup.number().typeError('The field cannot be left blank.').required(),
    cvv: yup.number().typeError('The field cannot be left blank.').required(),
  })
  .required()

export const cardFormResolver = yupResolver(cardFormSchema)
