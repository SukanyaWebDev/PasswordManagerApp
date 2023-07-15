import './index.css'

const PasswordItems = props => {
  const {eachItem, deleteItemFromList} = props
  const {id, userName, password, website, isDisplay} = eachItem
  const websiteLetter = website[0].toUpperCase()

  const deleteItem = () => {
    deleteItemFromList(id)
  }
  return (
    <li className="list-container">
      <div className="letter">{websiteLetter}</div>
      <div className="list_items">
        <p>{website}</p>
        <p>{userName}</p>
        <div>
          {isDisplay ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt=" stars"
              className="stars-img"
            />
          ) : (
            <p>{password} </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={deleteItem}
        className="delete-but"
        // testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default PasswordItems
