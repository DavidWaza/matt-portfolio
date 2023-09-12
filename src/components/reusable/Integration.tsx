import Image from "next/image";

interface IntegrationProps {
  src: string;
}

const IntegrationCard: React.FC<IntegrationProps> = (props) => {
  return (
    <div className=" ml-20">
      <Image src={props.src} width={70} height={70} alt="img" />
    </div>
  );
};
export default IntegrationCard;
