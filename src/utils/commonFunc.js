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

const timeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    let hourString = hour.toString().padStart(2, "0");
    options.push({ value: hourString + ":00", label: hourString + ":00" });
  }
  return options;
};

const convertToAMPM = (time) => {
  if (time) {
    if (time === "24:00") {
      return "12:00 AM";
    }
    const [hours, minutes] = time?.split(":");
    let period = "AM";

    let hours12 = parseInt(hours);
    if (hours12 >= 12) {
      period = "PM";
      hours12 -= 12;
    }

    return `${hours12}:${minutes.padStart(2, "0")} ${period}`;
  }
};

const generateTimeOptions = () => {
  let timeOptions = [];
  for (let i = 0; i < 24; i++) {
    let startHour = String(i).padStart(2, '0');
    let timeRange = `${startHour}:00`;
    timeOptions.push(timeRange);
  }
  return timeOptions;
}

export {
  encryptData,
  getSelectedValue,
  GetError,
  formatDate,
  timeOptions,
  convertToAMPM,
  generateTimeOptions
};
