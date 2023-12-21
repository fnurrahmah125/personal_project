function FormRadioBtn({ color, onHandleColor, checked }) {
  return (
    <label
      htmlFor={color}
      className="checkmark-wrapper cursor-pointer mx-2 mr-6 relative"
    >
      <input
        id={color}
        type="radio"
        name="radio"
        value={color}
        checked={checked}
        className="checkmark-input absolute opacity-0"
        onChange={(e) => onHandleColor(e)}
      />
      <span
        data-color={color}
        className="checkmark-circle absolute top-0 left-0 h-6 w-6 rounded-full after:contents-[*] after:absolute after:h-6 after:w-6 after:rounded-full after:border-2 after:border-slate-700 dark:after:border-white"
      ></span>
    </label>
  );
}

export default FormRadioBtn;
