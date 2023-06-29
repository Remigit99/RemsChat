import UserA from '../assets/UsersImg/Remi.jpg'

const Navbar = () => {
    return (
        <nav>
            <h2>RemsChat</h2>

            <div className="nav__right">
                <div className="nav__avatar">
                    <img src={UserA} alt="" />
                </div>

                <div className="nav__user">
                    <h5 className="usersname">Remi </h5>
                    <small>Abiodun</small>

                </div>

                <button>Signout</button>
            </div>
        </nav>
    )
}

export default Navbar