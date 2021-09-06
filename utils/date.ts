export const convertToHms = (seconds: number): string => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

export const convertToSeconds = (time: string): number => {
  const arr = time.split(":");
  const seconds = +arr[0] * 3600 + +arr[1] * 60 + +arr[2];
  return seconds;
};
