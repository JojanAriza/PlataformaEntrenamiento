import ProfileDetails from "../components/profile/ProfileDetails";
const userProfile = {
    username: "marijose_20",
    fullName: "Marijose Pérez",
    email: "marijose@example.com",
    country: "Colombia",
    city: "Medellín",
    idNumber: "123456789",
    phoneNumber: "+57 300 123 4567"
};

export default function Profile() {
  return (

            <ProfileDetails {...userProfile}/>

  )
}
