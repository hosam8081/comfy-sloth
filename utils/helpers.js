export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : 'USD',
  }).format(number /  100)
  return newNumber
}


export const uniqueValue = (data, type) => {
  let newArr = data.map(ele => ele[type])
  if (type == 'colors') {
    newArr  = newArr.flat()
  }
  return ['all', ...new Set(newArr)]
};