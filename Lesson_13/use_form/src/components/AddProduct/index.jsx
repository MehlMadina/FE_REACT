import React from 'react'
import { useForm } from "react-hook-form";
import s from "./style.module.css"

export default function AddProduct() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: true,
          minLength: 10,
          pattern: /^[a-zа-я]+(\s[a-zа-я]+)+$/i,
        })}
        placeholder="Title"
      />
      {/* <p className={s.error}>{ errors.title !== undefined ? errors.title.type : "" }</p> */}
      { <p className={s.error}>{ errors.title?.type }</p> }
      <input
        type='number'
        step="0.1"
        {...register("price", { required: true, min: 200, max: 1000 })}
        placeholder="Price"
      />
      <input
        type="number"
        {...register("discount", { min: 0, max: 100 })}
        placeholder="Discount"
      />
      <input
        {...register("width", { required: true, min: 1, max: 1000 })}
        placeholder="Width"
      />
      <input
        {...register("height", { required: true, min: 1, max: 1000 })}
        placeholder="Height"
      />
      <button>Submit form</button>
    </form>
  );
}
