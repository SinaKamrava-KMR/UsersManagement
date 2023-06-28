
export default function Modal({username, onRemoveItem }) {
  
  function handleModalState(state) {
    onRemoveItem(state)
  }


  return <div className="modal">
    <div className="backdrop"></div>
    <div className="modal-box">
      <p>ایا از حذف { username}  اطمینان دارید ؟</p>

      <div className="modal-btns-wrapper">
        <button className="delete-btn" onClick={()=>handleModalState(true)}>بله , حذف بشه </button>
        <button className="cancel-btn"  onClick={()=>handleModalState(false)}>انصراف</button>
      </div>
      </div>
  </div>
}