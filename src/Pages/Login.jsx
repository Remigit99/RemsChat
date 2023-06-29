import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section>
            <div className="container login__container">
                <div className="login__header">
                    <h1>RemsChat</h1>
                    <h3>Login</h3>
                </div>

                <form >

                    <input type="email" placeholder="Email" name="" id="" />
                    <input type="password" placeholder="Passord" name="" id="" />

                    <button className="submit" type="submit">Sign Up</button>

                    <p className="to-login">Don&apos;t have an account? <span><Link to="/register">Register</Link></span></p>

                </form>



            </div>
        </section>
    )
}

export default Login