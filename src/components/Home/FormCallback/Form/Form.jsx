import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form className={styles.callback_box} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input_box}>
        <input
          className={styles.callback_input}
          type="name"
          {...register("name", { required: true })}
          id="name"
          placeholder=" "
        />
        <label className={styles.callback_label} htmlFor="name">
          Ім'я
        </label>
        {errors.login && <span>This field is required</span>}
      </div>

      <div className={styles.input_box}>
        <input
          className={styles.callback_input}
          type="tel"
          {...register("tel", { required: true })}
          id="phone"
          placeholder=" "
        />
        <label className={styles.callback_label} htmlFor="phone">
          Телефон
        </label>
        {errors.login && <span>This field is required</span>}
      </div>

      <div className={styles.textarea_box}>
        <textarea
          className={styles.callback_message_input}
          name="feedback"
          rows="5"
          placeholder="Ваше сообщение"
          {...register("message")}
          id="message"
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <div className={styles.buttom_box}>
        <button className={styles.callback_submit_button} type="submit">
          Надіслати
        </button>
      </div>
    </form>
  );
};
export default Form;
