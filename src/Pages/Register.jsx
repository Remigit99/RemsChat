import { Link } from "react-router-dom"
import { LuImagePlus } from "react-icons/lu"

const Register = () => {
    return (
        <section>
            <div className="container register__container">
                <div className="register__header">
                    <h1>RemsChat</h1>
                    <h3>Register</h3>
                </div>

                <form >
                    <input type="text" placeholder="Name" name="" id="" />
                    <input type="email" placeholder="Email" name="" id="" />
                    <input type="password" placeholder="Passord" name="" id="" />
                    <input type="file" name="" id="avatar" style={{ display: 'none' }} />
                    <label htmlFor="avatar">
                        <LuImagePlus className="add__avatar" />
                        <p>Add your avatar</p>
                    </label>

                    <button className="submit" type="submit">Sign Up</button>

                    <p className="to-login">Have an account? <span><Link to="/login">Login</Link></span></p>

                </form>



            </div>
        </section>
    )
}

export default Register