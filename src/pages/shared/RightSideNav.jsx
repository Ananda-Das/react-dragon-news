import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import qzon1 from "../../assets/qZone1.png"
import qzon2 from "../../assets/qZone2.png"
import qzon3 from "../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      {/* login -start */}
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-xl font-semibold">Login With</h1>
        <button className="btn w-full btn-outline">
          <FaGoogle></FaGoogle>Login With Google
        </button>
        <button className="btn w-full btn-outline">
          <AiFillGithub></AiFillGithub>Login With Github
        </button>
      </div>
      {/* login -end */}

      {/* find us on - start */}
      <div className="p-4  mb-6">
        <h1 className="text-xl font-semibold mb-3">Find Us on</h1>
        <a href="" className="flex gap-2 text-lg border rounded-t-lg p-4 items-center">
          <FaFacebook></FaFacebook> <span>Facebook</span>
        </a>
        <a href="" className="flex gap-2 text-lg border-x p-4 items-center">
          <FaTwitter></FaTwitter>
          <span>Twitter</span>
        </a>
        <a href="" className="flex gap-2 text-lg border rounded-b-lg p-4 items-center">
          <FaInstagram></FaInstagram> <span>Instagram</span>
        </a>
      </div>
      {/* find us on - end */}
        
      {/* Q-Zone-start */}

      <div className="p-4 space-y-3 mb-6 bg-gray-100">
        <h1 className="text-xl font-semibold">Q-Zone</h1>
        <img src={qzon1} alt="" />
        <img src={qzon2} alt="" />
        <img src={qzon3} alt="" />
      </div>


      {/* Q-Zone-end */}

    </div>
  );
};

export default RightSideNav;
