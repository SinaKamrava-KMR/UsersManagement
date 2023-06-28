import { useState } from "react";
import Card from "../common/Card";
import Toast from "../common/Toast";


export default function PackingList({ users, onManageUser ,onEditUser}) {



  function handleDeleteUser(id) {
    const message = ` کاربر با موفقیت حذف شد`;
    onManageUser((items) => items.filter(user => user.id !== id),message);

  }
 


 
  return (
    <>
        <section className="packingList">
      {users.map((user) => (
        <Card
          user={user}
          key={user.id}
          onDelete={handleDeleteUser}
          onEdit={onEditUser}
        />
      ))}

      </section>
      
    </>
  );
}
