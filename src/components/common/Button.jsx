export default function Button({ onSubmitForm, value, disable }) {
  return (
    <button
      className={`form-btn ${disable ? "disable" : ""}`}
      onClick={!disable? onSubmitForm:()=>{}}
    >
      {value}
    </button>
  );
}
