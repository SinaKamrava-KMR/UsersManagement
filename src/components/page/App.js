import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Toast from "../common/Toast";

function App() {
  const [toast, setToast] = useState({show:false,message:''});
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "",
    lastname: "",
    username: "",
    id: 0,
    number: "",
    related: "",
  });
  function handleManageUser(items,toastMessage='') {
    setUsers(items);
    setUser({
      email: "",
      lastname: "",
      username: "",
      id: 0,
      number: "",
      related: "",
    });

    setToast({show:true,message:toastMessage});
    setTimeout(() => {
      setToast({show:false,message:''});
    }, 2000);
  }

  function handleEditUser(user) {
    setUser({ ...user });
  }

  return (
    <div className="app">
      <h2>مدیریت مخاطبین</h2>
      <div className="container">
        <Form
          key={new Date().getTime()}
          selectedUser={user}
          users={users}
          onManageUser={handleManageUser}
        />
        <PackingList
          users={users}
          onManageUser={handleManageUser}
          onEditUser={handleEditUser}
        />
      </div>
      {toast.show && <Toast message={toast.message}/>}
    </div>
  );
}

export default App;
