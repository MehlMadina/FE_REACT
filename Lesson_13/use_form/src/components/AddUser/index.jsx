import { useForm } from "react-hook-form";
import s from "./style.module.css";

export default function AddUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", {required: true, minLength: 3})} placeholder="First name"/>
      <input {...register("lastName")} placeholder="Last name"/>
      <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age"/>
      <input {...register("profession")} placeholder="Profession"/>
      <input {...register("mail", { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/})} placeholder="Email"/>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <button>Submit form</button>
    </form>
  );
}
