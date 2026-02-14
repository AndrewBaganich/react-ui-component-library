import { Input } from './components/Input/Input'
import { useState } from 'react'
import Toast from './components/Toast/Toast'
import SideBarMenu, { type MenuItem } from './components/SidebarMenu/SidebarMenu'
import {Menu } from 'lucide-react'
import styles from "./App.module.css"

const childSettings: MenuItem[] = [
    { id: "acc", label: "Account Settings"},
    { id: "adminpanel", label: "Admin Panel"},
    { id: "exit", label: "Exit"}
];

const items: MenuItem[] = [
    { id: "home", label: "Home"},
    { id: "settings", label: "Settings", children: childSettings},
];

function App() {
    const [value, setValue] = useState("")
    const [showToast, setShowToast] = useState(true)
    const [open, setOpen] = useState(false)

    return(
            <div>
                <button 
                className={styles.menuButton}
                onClick={() => setOpen(true)}
                >
                    <Menu size={22}/>
                </button>

                <SideBarMenu
                    isOpen={open}
                    onClose={()=> setOpen(false)}
                    items={items}
                />

                {showToast && (
                    <Toast 
                        duration={3000}
                        onClose={()=> setShowToast(false)}
                    />
                )}

                <Input
                    placeholder="Type something..."
                    type="password"
                    disabled={false}
                    value={value}
                    onChange={setValue}
                    defaultValue=""
                    clearable={true}
                    size='sm'
                />

                <button 
                className={styles.showToast}
                onClick={() => setShowToast(true)}
                >
                    Show toast
                </button>
            </div>
    )
}

export default App
