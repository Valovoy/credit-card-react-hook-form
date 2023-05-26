export const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLButtonElement

  const input = target.value.replace(/\D/g, '')

  target.value = input
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()

  return e
}
