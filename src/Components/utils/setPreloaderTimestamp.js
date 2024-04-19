/**
 * Setting current Date.now() as value to "lastPreloaderAnimationTimestamp" key in localStorage
 */
export const setPreloaderTimestamp = () => {
  window.localStorage.setItem(
    "lastPreloaderAnimationTimestamp",
    String(Date.now())
  );
};
