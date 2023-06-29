import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import Message from '../components/Message'



const Home = () => {
    return (
        <main>
            <div className="container main__container">
                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="chat__area">
                    <Message />
                    <Input />
                </div>
            </div>
        </main>
    )
}

export default Home