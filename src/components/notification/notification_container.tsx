import styles from './notification_container.module.css';
import Notification from '@/components/notification/notification/notification';
import { NotificationDef } from '@/components/notification/notification/notification_desc';

type Props = {
    notifications: Array<NotificationDef>,
    removeNotification: Function
}

export default function NotificationContainer({ notifications, removeNotification}:Props) {

    return (
        <div className={styles.notificationContainer}>
            {
                notifications.map(( i:NotificationDef ) => (
                        <Notification
                            noti={i}
                            removeNotification={removeNotification}
                        />
                    )
                )
            }
        </div>
    )
}