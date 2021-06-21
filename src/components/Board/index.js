import './Board.css';
import {Settings} from 'react-feather'
const IMAGEN_DEL_ZUCKARITAS = 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'

function Board() {
    return (
        <div className="board-container">
            <div className="left-area">
                izquierda
            </div>
            <div className="right-area">
                <div className="profile-card">
                    <img src={IMAGEN_DEL_ZUCKARITAS} style={{width: 55, borderRadius: 50, boxShadow:'0 5px 15px 0 rgb(37 44 97 / 15%), 0 2px 4px 0 rgb(93 100 148 / 20%)'}}/>
                    <p style={{color: "white", fontSize: 25}}>Diego Ignacio</p>
                    <Settings color="white" />
                </div>
                <div className="storage-card">

                </div>
            </div>
        </div>
    );
}

// https://assets.materialup.com/uploads/ecf6f047-8fae-4880-8847-44352b52e6ff/preview.png

export default Board;