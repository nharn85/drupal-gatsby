import React, { Component } from 'react';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

export class Lightbox extends Component {
    openPopupbox() {
        const content = (
            <div>
                <span>Open popupbox</span>
                <button onClick={this.updatePopupbox}>Update!</button>
            </div>
        )

        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Step 1'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    updatePopupbox() {
        const content = (
            <div>
                <span>Update popupbox with new content and config</span>
                <button onClick={PopupboxManager.close}>Close</button>
            </div>
        )

        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: 'Updated!'
                }
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