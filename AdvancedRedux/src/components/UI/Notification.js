import classes from "./Notification.module.css";
import { useSelector } from "react-redux";

const Notification = props => {
  const notificationState = useSelector(state => {
    return {
      error: state.cart.hasError,
      message: state.cart.message,
      isLoading: state.cart.isLoading
    };
  });
  let specialClasses = "";
  let title = "";

  if (notificationState.isLoading) {
    title = "Pending";
  } else if (notificationState.error) {
    specialClasses = classes.error;
    title = "Error";
  } else {
    specialClasses = classes.success;
    title = "Success";
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{notificationState.message}</p>
    </section>
  );
};

export default Notification;
