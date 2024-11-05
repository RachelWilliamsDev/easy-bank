import cx from "classnames";

const RequestInviteButton = ({ hidden }) => {
  return (
    <div
      className={cx(
        "bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-white px-6 py-3 rounded-full text-sm font-medium",
        hidden ? "hidden sm:inline-block" : "inline-block"
      )}
    >
      Request Invite
    </div>
  );
};
export default RequestInviteButton;
