import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function LoginComp() {
  return (
    <div className="inputs">
      <div className="input">
        <FaUser className="login-icons" />
        <input type="text" placeholder="Username" className="" />
      </div>
      <div className="input">
        <MdEmail className="login-icons" />
        <input type="email" placeholder="Email Id" />
      </div>
      <div className="input">
        <FaLock className="login-icons" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default LoginComp;
