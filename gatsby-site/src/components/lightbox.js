import React, { Component } from 'react';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

import '../../node_modules/react-popupbox/dist/react-popupbox.css'

class Lightbox extends Component {
    openPopupbox() {
        const content = <img src="static/3f129d517fda967300ce70a9247d9ea5-cef36ca6663a6add9fd14ac4f4034324-75b7a.png" />
        PopupboxManager.open({
            content,
            config: {
                fadeIn: true,
                fadeOut: true,
                fadeInSpeed: 500,
                overlayClose: true,
                escClose: true,
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.openPopupbox}>Click me</button>
                <PopupboxContainer />
            </div>
        )
    }
}

export default Lightbox