import styles from './notification.module.css'
import Image from 'next/image';
import { NotificationDef } from '@/components/notification/notification/notification_desc';

type Props = {
    noti: NotificationDef,
    removeNotification: Function
}

export default function Notification({ noti, removeNotification }:Props) {

    const iconSrc = noti.type === "error" ? "error_icon.svg" : "/success_icon.svg";
    const iconAlt = noti.type === "error" ? "error icon" : "success icon";
    const statusClass = noti.type === "error" ? styles.errorNotification : styles.successNotification;

    

    return (
        <div className = {[styles.notification, statusClass].join(' ')}>
            <Image
                src={iconSrc}
                height={40}
                width={40}
                alt={iconAlt}
                className={styles.notificationIcon}
                draggable={false}
            />
            <p className={styles.notificationText}>
                {noti.text}
            </p>
            <Image
                src="/close_icon.svg"
                height={40}
                width={40}
                alt="close button"
                className={[styles.notificationIcon, styles.closeIcon].join(' ')}
                draggable={false}
                onClick={() => removeNotification(noti.id)}
            />
        </div>
    )
}