import useAuthInfo from "../../../hooks/authInfo/useAuthInfo";

const DashboardHome = () => {
  const {
    user: { displayName, email, photoURL }
  } = useAuthInfo();
  return (
    <div>
      <div className="avatar">
        <div className="min-w-48 mask mask-hexagon">
          <img
            src={
              photoURL ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
      </div>

      <h3 className="text-xl">Name: {displayName}</h3>
      <h3 className="text-xl">Email: {email}</h3>
    </div>
  );
};

export default DashboardHome;
