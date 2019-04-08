declare function Omit<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Record<Exclude<keyof T, K>, {}>;

export default Omit;
