interface HeaderProps {
  header: string;
  className: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <div>
        <p className={props.className}>{props.header}</p>
      </div>
    </>
  );
};
export default Header;
