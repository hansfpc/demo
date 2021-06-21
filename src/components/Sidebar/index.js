import './Sidebar.css';
import {Home, File, Clock, Camera, Trash2, Users} from 'react-feather';

const itemsList = [
    {label: 'Home', icon: <Home color="white" className="menu-icon" />},
    {label: 'File', icon: <File color="white" className="menu-icon" />},
    {label: 'Recent', icon: <Clock color="white" className="menu-icon" />},
    {label: 'Photos', icon: <Camera color="white" className="menu-icon" />},
    {label: 'Bin', icon: <Trash2 color="white" className="menu-icon" />},
    {label: 'Shared', icon: <Users color="white" className="menu-icon" />},
]

function Sidebar() {
    return (
        <div className="sidebar-container">
          <div className="logo-area">
              <img className="logo" src="https://images.ctfassets.net/16npdkkoi5mj/4EAocVvRjUs3wHYN7PiSDB/f89865bb82569f8a649d1c07fbfbfbd5/CCO_-_BLANCO_-_SVG.svg" alt="logo"/>
          </div>
            <div className="menu-area">
                {itemsList.map((item) => {
                return <div className="menu-item">
                    {item.icon}
                    <p className="menu-label">{item.label}</p>
                </div>
                })
                }
            </div>
        </div>
    );
}

export default Sidebar;

// () => 'hola'