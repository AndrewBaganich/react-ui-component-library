import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import SideBarMenu from "./SidebarMenu.tsx"
import styles from "./SideBarMenu.module.css"
import {Menu} from "lucide-react"

const meta = {
  component: SideBarMenu,
} satisfies Meta<typeof SideBarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <button 
        className={styles.menuButton}
        onClick={() => setOpen(true)}
        >
          <Menu size={22}/>
        </button>


        <SideBarMenu
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </>
    )
  },

  args: {
    isOpen: true,
    onClose: () => {},
    items: [
      { id: "home", label: "Home" },
      {
        id: "settings",
        label: "Settings",
        children: [
          { id: "acc", label: "Account Settings" },
          { id: "admin", label: "Admin Panel" },
          { id: "exit", label: "Exit" },
        ],
      },
    ],
  },
}
