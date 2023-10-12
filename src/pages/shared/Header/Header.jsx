import logo from '../../../assets/assets/logo.png'

const Header = () => {
    return (
        <div>
         <img src={logo} alt="" />
         <p>Journalism Without Fear or Favour</p>
         <p className='text-lg'>Sunday, November 27, 2022</p>
        </div>
    );
};

export default Header;