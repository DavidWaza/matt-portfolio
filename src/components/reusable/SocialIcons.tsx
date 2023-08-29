import styles from "@/styles/styles.module.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIcons = () => {
  return (
    <div>
      <div className={styles.socialCard}>
        <a className={styles.sociallink1}>
        <FacebookTwoToneIcon
              sx={{ fontSize: "18px", color: "burlywood", cursor: "pointer" }}
            />
        </a>
        <a className={styles.sociallink2}>
          
        </a>
        <a className={styles.sociallink3}>
        <InstagramIcon
              sx={{
                fontSize: "18px",
                marginLeft: 1.5,
                color: "burlywood",
                cursor: "pointer",
              }}
            />
        </a>
        <a className={styles.sociallink4}>
        <TwitterIcon
              sx={{
                fontSize: "18px",
                marginLeft: 1.5,
                color: "burlywood",
                cursor: "pointer",
              }}
            />
        </a>
      </div>
    </div>
  );
};
export default SocialIcons;
