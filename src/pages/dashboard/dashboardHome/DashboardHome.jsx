import useAuthInfo from "../../../hooks/authInfo/useAuthInfo";

const DashboardHome = () => {
  const {
    user: { displayName, email, photoURL }
  } = useAuthInfo();
  return (
    <div>
      <div className="avatar">
        <div className="w-56 mask mask-hexagon">
          <img
            src={
              photoURL ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
      </div>

      <h3 className="text-xl">Name: {displayName || "John Doe"}</h3>
      <h3 className="text-xl">Email: {email}</h3>
    </div>
  );
};

export default DashboardHome;
