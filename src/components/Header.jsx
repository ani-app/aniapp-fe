//MUI ICONS
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = ({ children }) => {
  return (
    <div className="flex justify-between items-center p-4">
      {children}
      <div className="flex items-center gap-5">
        <NotificationsNoneIcon className="!text-2xl" />
        <img className="rounded-full" src="/images/exampleuser.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
