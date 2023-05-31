export const twoDigits = (num: number): string | null => {
  if (!num) return null

  return ('0' + num).slice(-2)
}
