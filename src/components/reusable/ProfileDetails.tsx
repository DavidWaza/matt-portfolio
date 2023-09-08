interface ProfileDetailsProps {
  body: string
}

const ProfileDetails:React.FC<ProfileDetailsProps> = (props) => {
  return (
    <div className="bg-white h-[30vh] text-center">
      <p className="text-black text-[1rem] md:text-[2.5rem] px-[2rem] md:px-[40rem] px-0 py-12">
        {props.body}
      </p>
    </div>
  );
};
export default ProfileDetails;
