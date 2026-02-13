import './App.css'
import { Input } from './components/Input/Input'
import { useState } from 'react'

function App() {
    const [value, setValue] = useState("")

    return(
        <>
            <Input
                placeholder="Type something..."
                type="password"
                disabled={false}
                value={value}
                onChange={setValue}
                defaultValue=""
                clearable={false}
                label=""
                error=""
            />
        </>
    )
}

export default App
