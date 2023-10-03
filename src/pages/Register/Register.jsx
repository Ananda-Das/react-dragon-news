import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));

    }

    return (
        <div>
            <Navbar></Navbar>
      <div>
      <h1 className="text-3xl text-center mx-auto mt-5">Please Register</h1>
      {/* form-start */}
      <form onSubmit={handleRegister} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {/* form-end */}
      <p className="text-center">Already have an Account ? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
      </div>
        </div>
    );
};

export default Register;