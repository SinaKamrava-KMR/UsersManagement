import RelatedBox from "./RelatedBox";

import { useState } from "react";

export default function Input({
  isRelated = false,
  name,
  value,
  errorMessage,
  onChange,
  ...others
}) {
  const [focused, setFocused] = useState(false);
  const [boxopen, setBoxopen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  

  function handleSelectedItem(item) {
    setInputValue(() => item);
    onChange({ key: 'related', value: item })
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    onChange({key:e.target.name,value:e.target.value})
  }
  

  return (
    <div className="input-wrapper">
      {isRelated && (
        <span onClick={()=>setBoxopen(!boxopen)} className={`arrow-icon ${boxopen && 'rotated-icon'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </span>
      )}

      <input
        {...others}
          
        value={inputValue || ''}
        name={name}
        onChange={handleChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      <small>{errorMessage}</small>
      {boxopen && <RelatedBox onSelectedItem={handleSelectedItem } /> }
      
    </div>
  );
}
