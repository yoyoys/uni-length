export const hello = (msg: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(msg);
  }
  return msg;
};
