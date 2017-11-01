import React, {Component} from 'react';
import Leftsubmenudate from './leftmenudate';
import './leftmenu.scss'

class Leftsubmenu extends React.Component {
    render() {
        return (
            <div className="main_nav">
                <div className="sub_menu">
                    <div>Menu</div>  
                    {this.props.alumnosList.map(function (item, i) {return (<a key={i} href="#">Ver Noticias de <b>{item.nombre}</b></a>)})}
                </div>
                <Leftsubmenudate/>
            </div>
        );
    }
}

export default Leftsubmenu;