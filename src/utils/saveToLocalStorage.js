function getLocalStorageItem(key) {
  return JSON.parse(window.localStorage.getItem(key))
}
function setLocalStorageItem(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value))
}
function removeLocalStorageItem(key) {
  window.localStorage.removeItem(key)
}
function clearLocalStorageItems() {
  window.localStorage.clear()
}
export {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
  clearLocalStorageItems
}
