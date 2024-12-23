import { useRef } from "react";

export function useDebounce(og) {
    const currentClock = useRef();
    
    const fn =()=> {
        clearTimeout(currentClock.current)
        currentClock.current=setTimeout(og,300)
    }

    return fn

}