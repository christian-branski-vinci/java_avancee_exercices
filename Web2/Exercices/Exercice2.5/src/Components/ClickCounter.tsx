import { useState } from "react";


interface ClickCounterProps {
    title: string,
    on10clicks: string
    hoverMessage: string;
}

const ClickCounter = ({
    title,
    on10clicks,
    hoverMessage }: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card">
            <h4>{title}</h4>
            
            {isHovered ? <p>{hoverMessage}</p>:null}
            <button
                onClick={() => setCount((count) => count + 1)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
                >
                count is {count}
            </button>
            {count >= 10 ? <p>{on10clicks}</p> : null}
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default ClickCounter
