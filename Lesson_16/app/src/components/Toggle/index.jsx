import React from "react";
import { useToggle } from "../../hooks/useToggle";

export default function Toggle() {
//   const [show, setShow] = useState(true);

//   const toggle = () => setShow(!show);

const [ show, toggle ] = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>Button</button>
      {
        show ? 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          fugiat!
        </p>
       : ""
      }
    </div>
  );
}
