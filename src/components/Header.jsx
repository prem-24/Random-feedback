import PropTypes from "prop-types";


const Header = ({ text ,bgColor, textColor}) => {

  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
   }  

  return (
    <header style={headerStyle}>
        <div className="container">
            <div className="header-flex">
              <h2>{text}</h2>
              <a href="/about">About</a>
            </div>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Random Review",
    bgColor:"blue",
    textColor:"#ffffff"
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header


