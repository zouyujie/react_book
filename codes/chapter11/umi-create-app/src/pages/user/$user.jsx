import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.user}： 黄帝、颛顼（Zhuānxū）、帝喾（Dìkù）、唐尧、虞舜
            </div>
        )
    }
}
