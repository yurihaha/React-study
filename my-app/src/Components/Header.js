import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
      console.log('click');
    }
    return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1>
       */}
       <h1>{title}</h1>
       <Button color="green" text="add" onClick={onClick}/>
      <Button color="yellow" text="delete" onClick={onClick}/>
    </header>
    )
 
}

Header.defaultProps = {
  title: '하유리의 업무',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//css in js
// const headingStyle = {
//   color: 'blue', backgroundColor: 'pink'
// }
export default Header

