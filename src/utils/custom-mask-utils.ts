export const customMask = {
  constructor: (token: string, max: number): object => {
    let mask = '';
    for (let i = 0; i < max; i++) {
      mask += token;
    }
    return {
      mask: mask,
      tokens: {
        N: {
          pattern: /[a-zA-ZáãâéêíîóôúçÁÃÂÉÊÍÎÓÔÚÇ\s]/
        },
        E: {
          pattern: /[^\s]/,
          transform: (v: string): string => v.toLowerCase()
        }
      }
    };
  }
};

export default customMask;
