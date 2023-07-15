import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    objectList: [],
    searchInput: '',
  }

  getWebsiteValue = event => {
    this.setState({website: event.target.value})
  }

  getUsernameValue = event => {
    this.setState({userName: event.target.value})
  }

  getPasswordValue = event => {
    this.setState({password: event.target.value})
  }

  deleteItemFromList = id => {
    const {objectList} = this.state

    const filteredList = objectList.filter(eachItem => eachItem.id !== id)

    this.setState({objectList: filteredList})
  }

  clickAndGetDetails = () => {
    const {userName, password, website} = this.state

    if (userName !== '' && password !== '' && website !== '') {
      const newObject = {
        userName,
        password,
        website,
        id: uuidv4(),
        isDisplay: true,
      }

      this.setState(prevState => ({
        objectList: [...prevState.objectList, newObject],
      }))
      this.setState({userName: '', password: '', website: ''})
    }
  }

  getSearchElements = event => {
    this.setState({searchInput: event.target.value})
  }

  clickCheckbox = event => {
    const {objectList} = this.state
    if (event.target.checked) {
      const checkedList = objectList.map(eachItem => ({
        ...eachItem,
        isDisplay: !eachItem.isDisplay,
      }))
      this.setState({objectList: checkedList})
    } else {
      const checkedList = objectList.map(eachItem => ({
        ...eachItem,
        isDisplay: !eachItem.isDisplay,
      }))
      this.setState({objectList: checkedList})
    }
  }

  //   formSubmit = () => {

  //   }

  render() {
    const {website, userName, password, objectList, searchInput} = this.state
    // const searchInput = searchInput.toLowerCase()
    const searchFilteredList = objectList.filter(eachItem =>
      eachItem.website.toUpperCase().toLowerCase().includes(searchInput),
    )
    const len = searchFilteredList.length
    const isGreater = len > 0

    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="logo-image"
          />
        </div>

        <div className="card-container1">
          <div className="card1" onSubmit={this.formSubmit}>
            <h1 className="head">Add New Password</h1>

            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="web-image"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.getWebsiteValue}
                value={website}
              />
            </div>

            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png  "
                alt="username"
                className="web-image"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.getUsernameValue}
                value={userName}
              />
            </div>

            <div className="input1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="web-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.getPasswordValue}
                value={password}
              />
            </div>

            <div className="btn-element">
              <button type="submit" onClick={this.clickAndGetDetails}>
                Add
              </button>
            </div>
          </div>

          <div className="card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-image"
            />
          </div>
        </div>

        <div className="card-container2">
          <div className="your-pass-container">
            <div className="your-password-container">
              <h1 className="head">Your Passwords</h1>
              <p className="count-container">{len}</p>
            </div>

            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="web-image"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.getSearchElements}
              />
            </div>
          </div>
          <hr />
          <div className="show-main-container">
            <input
              type="checkbox"
              id="myCheck"
              onClick={this.clickCheckbox}
              className="show-container"
            />
            <label htmlFor="myCheck" className="label-element">
              Show passwords
            </label>
          </div>
          <div>
            {isGreater ? (
              <ul>
                {searchFilteredList.map(eachItem => (
                  <PasswordItems
                    eachItem={eachItem}
                    key={eachItem.id}
                    deleteItemFromList={this.deleteItemFromList}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                  className="no-pass-img"
                />
                <p className="no-pass-heading">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
