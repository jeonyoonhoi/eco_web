import React, {Component}  from 'react'

import { withRouter } from 'react-router-dom';
import { createHashHistory } from 'history'
export const history = createHashHistory()

class MainPage extends Component{
    
    constructor(){
        super();
        this.moveLoginPage = this.moveLoginPage.bind(this);
    }

    moveLoginPage() {
        history.push('/login')
    }
    

    render(){
        return (
            <div id="MainPageId">
                <h1>소개페이지</h1>
                <div className="form-group">
                    <button onClick={this.moveLoginPage} className="btn btn-primary mt-2" type="submit">
                        시작하기
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(MainPage);
