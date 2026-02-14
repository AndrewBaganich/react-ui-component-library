import { useEffect, useState } from "react"
import styles from "./Toast.module.css"
import { Flag, X } from 'lucide-react'

export type ToastProps = {
  duration?: number
  onClose?: () => void
  variant?: "success" | "error" | "warning"
}

type ToastContent = {
    title: string;
    description: string;
};

const getContent = (variant: "success" | "error" | "warning"): ToastContent => {
    switch (variant) {
        case "success":
            return {
                title: "Success",
                description: "This toast task for CrewRed is ready"
            };
        case "error":
            return {
                title: "Error",
                description: "Something went wrong"
            };
        case "warning":
            return {
                title: "Warning",
                description: "Please check something"
            };
        }
    };

export default function Toast (props: ToastProps) {
    const variant = props.variant ?? "success"
    const content = getContent(variant);

    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => setIsClosing(true);

    useEffect(()=>{

        if (!props.duration) return

        const timer = setTimeout(()=>{
            handleClose()
        }, props.duration)

        return ()=> clearTimeout(timer)
    }, [props.duration]);

    useEffect(()=>{
        if (!isClosing) return

        const closeTimer = setTimeout(() => {
            props.onClose?.()
        }, 300)

        return ()=> clearTimeout(closeTimer)
    }, [isClosing, props.onClose]);

    return (
        <>
            <div className={`${styles.toastContainer} ${styles[variant]} ${
                isClosing ? styles.fadeOut : styles.fadeIn
            }`}>
                <div className={styles.toastIconBox}>
                     <Flag className={styles.toastIcon} />
                </div>

                 <div className={`${styles.toastText} ${styles[variant]}`}>
                    <h3>{content.title}</h3>
                    <p>{content.description}</p>
                </div>

                <div className={`${styles.toastClose} ${styles[variant]}`}>
                    <button onClick={() => handleClose()}>
                        <X size={18} />
                    </button>
                </div>
            </div>
        </>
    )
}