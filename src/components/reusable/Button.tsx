interface ButtonProps {
  text: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className={props.className}>{props.text}</button>
    </>
  );
};
export default PrimaryButton;
