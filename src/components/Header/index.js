import './index.css'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoCartOutline} from 'react-icons/io5'

const Header = props => {
  const onLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    // history.replace('/login')
  }

  const renderCartCount = () => {
    const {displayData} = props
    console.log('dis', displayData)
    let cartItemsCount = 0
    displayData.forEach(each => {
      cartItemsCount = cartItemsCount + each.quantity
      console.log('caryi', each.quantity)
    })
    return (
      <>
        {cartItemsCount > 0 ? (
          <div className="cart-count-badge">{cartItemsCount}</div>
        ) : null}
      </>
    )
  }

  return (
    <>
      <div className="header">
        <div className="left">
          <h1 className="heading">UNI Resto Cafe</h1>
        </div>
        <div className="right">
          <p>My Orders</p>
          <div className="divv">
            <IoCartOutline className="cart" />
            {renderCartCount()}
          </div>
        </div>
        <div className="right2">
          <button type="button" onClick={onLogout} className="logout-button">
            Log Out
          </button>
        </div>
        <br className="line" />
      </div>
    </>
  )
}
export default Header
