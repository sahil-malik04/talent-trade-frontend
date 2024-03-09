export const ThemeBtn = ({ label, width, onClick }) => {
  return (
    <button
      className={`bg-peacockblue-100 w-${width} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
