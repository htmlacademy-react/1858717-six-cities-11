/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearNotification } from '../../store/notifications/notifications';
import { getNotifications } from '../../store/notifications/selectors';

const DEFAULT_DURATION = 4000;

function Notification(): JSX.Element {
  const notifications = useAppSelector(getNotifications);
  const dispatch = useAppDispatch();

  const renderNotification = () => {
    notifications.forEach((notification) => {
      const toastOptions = {
        autoClose: notification.duration || DEFAULT_DURATION,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id))
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastOptions);
          break;
        case 'success':
          toast.success(notification.message, toastOptions);
          break;
        case 'info':
          toast.info(notification.message, toastOptions);
          break;
        case 'warning':
          toast.warning(notification.message, toastOptions);
          break;
        default:
          return null;
      }
    });
  };

  return <>{renderNotification()}</>;
}

export default Notification;
