import { Store, NOTIFICATION_TYPE } from "react-notifications-component";

/**
 * @Notification
 * @info Notification package use in app based
 * @desc Adds notifications to screen
 *
 * @types can be SUCCESS DEFAULT(BLUE) WARNING INFO DANGER CUSTOM
 */

type NotificationProps = {
  title: string;
  message: string;
  type: NOTIFICATION_TYPE | undefined;
};

export const addNotification = ({
  title,
  message,
  type,
}: NotificationProps) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      showIcon: true,
      pauseOnHover: true,
    },
  });
};
