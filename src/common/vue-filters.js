// https://vuejs.org/v2/guide/filters.html#ad
const filters = {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

export default function (VueRef) {
  Object.keys(filters).forEach(filterName => {
    VueRef.filter(filterName, filters[filterName])
  })
}
