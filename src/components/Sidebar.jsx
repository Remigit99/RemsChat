import Navbar from '../components/Navbar'
import Chats from '../components/Chats'
import Search from '../components/Search'


const Sidebar = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar