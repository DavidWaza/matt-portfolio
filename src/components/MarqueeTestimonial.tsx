import Image from "next/image";
import styles from "../styles/styles.module.css";

interface TestimonialProps {
  name: string;
  words: string;
  className?: string;
  position:string;
}
const Testimonial: React.FC<TestimonialProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
      </div>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.text}>{props.words}</p>
      <p className={styles.position}>{props.position}</p>
    </div>
  );
};
export default Testimonial;
