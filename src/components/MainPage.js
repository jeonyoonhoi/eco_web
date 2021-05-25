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
                <h1>안녕하세요?</h1>
                <h3> 저는 재활용 방법 알리미 챗봇입니다. </br>
            생활 속 재활용 방법에 대한 정보를 알려드리기 위해 만들어졌어요! </br>
            시작해볼까요? </h2>
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
