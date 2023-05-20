import { useState } from "react";


export function useLocalStorage(initialValue, key) {
    const getData = () => JSON.parse(localStorage.getItem(key)) ?? initialValue;

    const [ value, setValue ] = useState(getData);

    localStorage.setItem(key, JSON.stringify(value));

    return [value, setValue]
}