var CryptoJS = require("crypto-js");

const encryptPassword = (password) => {
  var ciphertext = CryptoJS.AES.encrypt(
    password,
    process.env.REACT_APP_ENCRYPT_KEY
  ).toString();
  return ciphertext;
};

export { encryptPassword };
