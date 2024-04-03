var CryptoJS = require("crypto-js");

const encryptData = (data) => {
  var ciphertext = CryptoJS.AES.encrypt(
    data,
    process.env.REACT_APP_ENCRYPT_KEY
  ).toString();
  return ciphertext;
};

const getSelectedValue = (key) => {
  return key.map((option) => option.value);
};

const GetError = ({ value }) => {
  return <p className="text-red-500 text-sm italic">{value}</p>;
};

const formatDate = (item) => {
  const date = new Date(item);
  return date.toLocaleString();
};

export { encryptData, getSelectedValue, GetError, formatDate };
