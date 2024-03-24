var CryptoJS = require("crypto-js");

const encryptPassword = (password) => {
  var ciphertext = CryptoJS.AES.encrypt(
    password,
    process.env.REACT_APP_ENCRYPT_KEY
  ).toString();
  return ciphertext;
};

const getSelectedValue = (key) => {
  return key.map((option) => option.value);
};

const GetError = ({value}) => {
  return <p className="text-red-500 text-xs italic">{value}</p>;
};

export { encryptPassword, getSelectedValue, GetError };
