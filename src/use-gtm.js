let gtmInstance = null

export function setGtmInstance (instance) {
  gtmInstance = instance
}

export function useGtm () {
  return gtmInstance
}
