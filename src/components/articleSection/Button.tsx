interface Props {
  onClick: any;
  children: any;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className="border-solid border border-light-gray rounded-xl w-12 h-12"
    >{children}</button>
  );
};

export default Button;
