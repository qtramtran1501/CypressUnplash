export const commonHelper = {
  randomNumber() {
    return crypto.getRandomValues(new Uint8ClampedArray(10))[0];
  },

  getRandomInRange(min, max) {
    const randomBuffer = new Uint32Array(1);

    crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
  }
};