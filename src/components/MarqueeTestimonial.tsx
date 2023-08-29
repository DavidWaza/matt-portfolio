import Image from "next/image";
import styles from "../styles/styles.module.css";

interface TestimonialProps {
  name: string;
  words: string;
  className?: string;
}
const Testimonial: React.FC<TestimonialProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Image src="/assets/user.png" alt="user" width={150} height={150} />
      </div>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.text}>{props.words}</p>
    </div>
  );
};
export default Testimonial;