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

export const randomHex = () => {
  return `#${(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}`
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
