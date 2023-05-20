import { useState } from "react";


export function useInput(initialValue) {
    const [ value, setValue ] = useState(initialValue);
    const onChange = ({target}) => setValue(target.value);
    return {value, onChange};
}