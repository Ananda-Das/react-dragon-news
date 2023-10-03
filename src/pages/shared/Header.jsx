import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto py-2 mt-3' src={logo} alt="" />
            <p className='py-1'>Journalism Without Fear or Favour</p>
            <p className='text-xl py-1 mb-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;