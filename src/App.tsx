import { Input } from './components/Input/Input'
import { useState } from 'react'
import Toast from './components/Toast/Toast'

function App() {
    const [value, setValue] = useState("")
    const [showToast, setShowToast] = useState(true)

    return(
            <div>
                <button onClick={() => setShowToast(true)}>Show toast</button>
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
            </div>
    )
}

export default App
