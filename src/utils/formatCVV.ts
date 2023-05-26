export const formatCVV = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLButtonElement

  target.value = target.value.replace(/\D/g, '')

  return e
}
