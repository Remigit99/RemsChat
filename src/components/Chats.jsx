import AVT1 from '../assets/UsersImg/avatar1.jpg'
import AVT2 from '../assets/UsersImg/avatar2.jpg'
import AVT3 from '../assets/UsersImg/avatar3.jpg'
import AVT4 from '../assets/UsersImg/avatar4.jpg'

const Chats = () => {
    return (
        <div className="sidebar__chats">

            <article className="sidebar__chat">
                <div className="side__avatar">
                    <img src={AVT1} alt="" />
                </div>

                <div className="avatar__info">
                    <h4 className="name">Sofiyat</h4>
                    <small>Hi, How are you doing?</small>
                </div>
            </article>

            <article className="sidebar__chat">
                <div className="side__avatar">
                    <img src={AVT2} alt="" />
                </div>

                <div className="avatar__info">
                    <h4 className="name">Sofiyat</h4>
                    <small>Hi, How are you doing?</small>
                </div>
            </article>

            <article className="sidebar__chat">
                <div className="side__avatar">
                    <img src={AVT3} alt="" />
                </div>

                <div className="avatar__info">
                    <h4 className="name">Sofiyat</h4>
                    <small>Hi, How are you doing?</small>
                </div>
            </article>

            <article className="sidebar__chat">
                <div className="side__avatar">
                    <img src={AVT4} alt="" />
                </div>

                <div className="avatar__info">
                    <h4 className="name">Sofiyat</h4>
                    <small>Hi, How are you doing?</small>
                </div>
            </article>

        </div>
    )
}

export default Chats