import Link from "next/link";

interface ButtonProps {
  text: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <Link
        href="https://drive.google.com/file/d/1px3jbIXiKgeSFDhuKQaFMk3-3497pUEv/view?usp=sharing"
        target="/blank"
      >
        <button className={props.className}>{props.text}</button>
      </Link>
    </>
  );
};
export default PrimaryButton;
