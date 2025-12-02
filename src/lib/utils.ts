// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const memoize = <T extends (...args: any[]) => any>(
  fn: T,
): ((...funcArgs: Parameters<T>) => ReturnType<T>) => {
  let memoizedFn = (...args: Parameters<T>): ReturnType<T> => {
    const data = fn(...args);

    memoizedFn = (..._args: Parameters<T>): ReturnType<T> => data;
    return memoizedFn(...args);
  };

  return memoizedFn;
};

/*
 * Denote code paths that won't be reached under normal circumstances.
 */
export const unreachable = (message?: string): never => {
  const error =
    message === undefined
      ? new Error("Unreachable code reached.")
      : new Error(`Unreachable code reached: ${message}`);
  throw error;
};

export const isString = (x: unknown): x is string => typeof x === "string";
