import './App.css'
import { Input } from './components/Input/Input'

function App() {
    return(
        <>
            <Input
                placeholder="Type something..."
                type="text"
                disabled={false}
                value=""
                defaultValue=""
                clearable={false}
                label=""
                error=""
            />
        </>
    )
}

export default App
