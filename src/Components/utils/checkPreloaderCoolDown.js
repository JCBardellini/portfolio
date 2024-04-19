/**
 * @returns {boolean} true if animation required, false otherwise
 */
export const checkPreloaderCoolDown = () => {
  const lastPreloaderAnimationTimestamp = window.localStorage.getItem(
    "lastPreloaderAnimationTimestamp"
  );

  if (!lastPreloaderAnimationTimestamp) {
    return true;
  }

  if (Date.now() - Number(lastPreloaderAnimationTimestamp) > 86400000) {
    return true;
  }

  return false;
};