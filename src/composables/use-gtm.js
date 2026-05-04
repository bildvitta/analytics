let gtmInstance = null

export default function useGtm () {
  function setGtmInstance (instance) {
    gtmInstance = instance
  }

  function getGtmInstance () {
    return gtmInstance
  }

  return {
    setGtmInstance,
    getGtmInstance
  }
}