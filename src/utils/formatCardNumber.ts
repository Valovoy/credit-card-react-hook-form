import { CardMasks } from 'utils/constants/cardMasks'

export const formatCardNumberInput = (
  e: React.ChangeEvent<HTMLInputElement>,
) => {
  const target = e.target as HTMLButtonElement

  const input = target.value.replace(/\D/g, '')

  target.value = input
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()

  return e
}

export const formatCardNumberView = (card: string): string => {
  if (!card) return CardMasks.CardNumber

  let newCardNumber = ''

  for (let i = 0; i < card.length; i++) {
    if (i > 4 && i < 15 && card[i] !== ' ') {
      newCardNumber += '*'
    } else {
      newCardNumber += card[i]
    }
  }

  return newCardNumber + CardMasks.CardNumber.slice(newCardNumber.length)
}
