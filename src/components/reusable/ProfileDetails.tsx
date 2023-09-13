import StarsIcon from "@mui/icons-material/Stars";

interface ProfileDetailsProps {
  body: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = (props) => {
  return (
    <div className="bg-white h-[30vh] text-center shadow-lg">
      <p className="text-black text-[1rem] md:text-[2.5rem] px-[2rem] unbound px-0 py-8">
        {props.body}
      </p>
      <StarsIcon
        sx={{
          color: "black",
          fontSize: "3rem",
          // animation: "rotate 4s linear infinite",
        }}
      />
    </div>
  );
};
export default ProfileDetails;
