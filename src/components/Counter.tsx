import { createSignal } from "solid-js"



export const Counter = () => {
    
    const [counter , setCounter] = createSignal(0)

    
    return (
        <>
            <h1 class="text-5xl" >Counter</h1>

            <h3 class="text-xl">Value : { counter() }</h3>
            
            <button 
            onClick={
                () => setCounter( prev => ++prev)
            }
            class="bg-blue-500 p-2 mr-2 rounded">+</button>
            
            <button
            onClick={
                () => setCounter( prev => --prev)
            }
            class="bg-blue-500 p-2 mr-2 rounded">-</button>
        
        </>
    )
}