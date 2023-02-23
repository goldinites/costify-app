export const randomString = (length = 10) => {
  let result = ''
  const characters = 'AaBbCcDdEeFfGgHhJjKkLMmNnOoPpRrSsTtUuVvWwXxYyZziq23456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
