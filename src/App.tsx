import React from "react";
import { TextField } from "./TextField";
import { Counter } from "./Counter";
const App: React.FC = () => {
    return (
        <div>
            <Counter>
                {({ count, setCount }) => (
                    <div className="counter-inner">
                        {count}
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                )}
            </Counter>
        </div>
    );
};

export default App;
