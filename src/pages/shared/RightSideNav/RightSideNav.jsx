import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/assets/qZone1.png';
import qZone2 from '../../../assets/assets/qZone2.png';
import qZone3 from '../../../assets/assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
           <div className='p-4 space-y-3 mb-4'>
            <h2 className="text-3xl">Login</h2>
            <button className="btn btn-outline w-full">
             <FaGoogle></FaGoogle>
             Google
             </button>
            <button className="btn btn-outline w-full">
             <FaGithub></FaGithub>
             Github
             </button>
           </div>
           <div className='p-4  mb-4'>
            <h2 className="text-3xl mb-2">Find us on</h2>
           <a className='p-4 flex text-lg gap-2 items-center border rounded-t-lg' href="">
            <FaFacebookF></FaFacebookF>
            Facebook
           </a>
           <a className='p-4 flex text-lg gap-2 items-center border-x rounded-b-lg' href="">
            <FaTwitter></FaTwitter>
            <span>Twitter</span>
           </a>
           <a className='p-4 flex text-lg gap-2 items-center border rounded-b-lg' href="">
            <FaInstagram></FaInstagram>
            <span>Instagram</span>
           </a>
           </div>
           {/* q zone */}
           <div className='p-4 space-y-3 mb-4'>
            <h2 className="text-3xl"> Q zone</h2>
            <img className='rounded-lg' src={qZone1} alt="" />
            <img className='rounded-lg' src={qZone2} alt="" />
            <img className='rounded-lg' src={qZone3} alt="" />
          
           </div>
        </div>
    );
};

export default RightSideNav;