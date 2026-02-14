import styles from "./SideBarMenu.module.css"
import { useState } from "react"
import { X } from 'lucide-react'

export type SideBarProps = {
    isOpen: boolean,
    onClose: () => void,
    items: MenuItem[];
}

export type MenuItem = {
  id: string;
  label: string;
  children?: MenuItem[];
};


export default function SideBarMenu (props: SideBarProps) {
const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({})

    return (
        <div className={`${styles.overlay} ${props.isOpen ? styles.open : ""}`} onClick={props.onClose}>

            <div className={`${styles.sideBar} ${props.isOpen ? styles.open : ""}`} onClick={(e)=>{e.stopPropagation()}}>

                <div className={styles.items}>
                    {props.items.map((element) => {
                        const hasChildren = !!element.children?.length
                        const isExpanded = !!expandedIds[element.id]
                        return (
                            <div key={element.id}>
                                <div
                                className={styles.item}
                                onClick={() => {
                                    if (!hasChildren) return
                                    const newState = { ...expandedIds }
                                    newState[element.id] = !expandedIds[element.id]
                                    setExpandedIds(newState)
                                }}
                                >
                                {element.label}
                                </div>
                            
                            {hasChildren && isExpanded && (
                                <div className={styles.childrenList}>
                                    {element.children!.map((child) => (
                                        <div key={child.id} className={styles.itemChildren}>
                                            {child.label}
                                            </div>
                                        ))}
                                        </div>
                                    )}
                            </div>
                        )
                    })}
                </div>

                <div className={styles.closeButton}>
                    <button onClick={props.onClose}>
                        <X size={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}