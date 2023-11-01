const debounce = (
  callback: (...args: (unknown | undefined)[]) => void,
  wait?: number
): ((...args: (unknown | undefined)[]) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    } else {
      callback(...args);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait || 100);
  };
};

export { debounce };
