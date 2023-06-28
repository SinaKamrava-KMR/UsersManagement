import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

export default function Form({ users, onManageUser, selectedUser }) {
  // const [info, setInfo] = useState({
  //   email: "",
  //   lastname: "",
  //   username: "",
  //   id: 0,
  //   number: "",
  //   related: "",
  // });
  const [info, setInfo] = useState(selectedUser);
  console.log(selectedUser);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "نام",
      errorMessage: "نام باید حداقل شامل ۳ حرف و بدونه کاراکتر خاص باشد",
      pattern: "^[A-Za-z0-9\u0600-\u06FF]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "نام خانوادگی",
      errorMessage:
        "نام خانوادگی باید حداقل شامل ۳ حرف و بدونه کاراکتر خاص باشد",
      pattern: "^[A-Za-z0-9\u0600-\u06FF]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "number",
      type: "text",
      placeholder: "شماره تماس",
      errorMessage: " شماره تماس را درست وارد کنید ",
      pattern: `^[0-9]{11}$`,
      required: true,
      maxLength: 11,
    },
    {
      id: 4,
      name: "related",
      type: "text",
      placeholder: "نسبت",
      errorMessage: "لطفا نسبت خود را وارد کنید",
      required: true,
      isRelated: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "ایمیل",
      errorMessage: "لطفا ادرس ایمیل خود را درست وارد کنید",
      required: true,
    },
  ];

  function handleChange({ key, value }) {
   
    setInfo({ ...info, [key]: value });
  }

  function handleSubmitForm(e) {
    let message = "";

    if (info.id === 0) {
      message = ` کاربر با موفقیت اضافه شد `;
      onManageUser([...users, { ...info, id: crypto.randomUUID() }], message);
    } else {
      message = ` کاربر با موفقیت ویرایش شد `;
      onManageUser(
        users.map((user) => (user.id === info.id ? info : user)),
        message
      );
    }
  }

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={info[input.name]}
            onChange={handleChange}
          />
        ))}

        <Button
          value={info.id === 0 ? "اضافه کردن " : "ویرایش کردن"}
          disable={(Object.values(info).some(item=> item ===''))}
          onSubmitForm={handleSubmitForm}
        />
      </form>
    </>
  );
}
