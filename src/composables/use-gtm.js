let gtm = null

export default function useGtm () {
  function setGtmInstance (instance) {
    gtm = instance
  }

  return {
    setGtmInstance,
    gtm
  }
}