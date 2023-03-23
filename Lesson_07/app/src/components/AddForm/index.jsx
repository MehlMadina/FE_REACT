import React from 'react';
import { useDispatch } from 'react-redux';
import { sumAction } from '../../store/reducer/clickerReducer';

export default function AddForm() {

    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const { number } = event.target;
        // dispatch({type: SUM, payload: +number.value,});
        dispatch(sumAction(number.value));
        number.value = "";
      };

  return (
    <div>
        <form onSubmit={submit}>
            <input type="number" name='number' placeholder='Number' />
            <button>Increase</button>
        </form>
    </div>
  )
}
