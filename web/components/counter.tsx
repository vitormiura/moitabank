import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="text-6xl text-red-600">{count}</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => setCount((count) => count + 1)}>
                    count+
                </button>
            </div>
        </div>
    )
}
export default Counter;