import React, { Component } from 'react';
import router from 'umi/router';

export default class User extends Component {
    render() {
        return (
            <div style={{padding:'8px'}}>
                <button onClick={()=>router.goBack()}>返回首页</button>
                黄帝、颛顼（Zhuānxū）、帝喾（Dìkù）、唐尧、虞舜
            </div>
        )
    }
}
