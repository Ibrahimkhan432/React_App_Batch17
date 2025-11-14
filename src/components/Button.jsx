const Button = ({ title, color = "white", backgroundColor, btnStyle,onclick}) => {
  return (
    <div className="border-2 rounded-xl bg-green-700 p-2">
      <button
      onClick={onclick}
      style={{ ...btnStyle, color, backgroundColor }}>{title}</button>
    </div>
  );
};

export default Button;
