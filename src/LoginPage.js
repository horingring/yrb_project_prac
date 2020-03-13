import React, { Component } from 'react';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginTest : false
        }
    }
    render(){
        return (
            <div>
                <h2>로그인 페이지</h2>
                <form 
                    action="./"
                    onSubmit={function(e){
                        e.preventDefault();
                        //로그인 로직
                        //1. 받은정보 vs DB정보
                        //2. DB정보의 nick, ... 받고 세션에 올리기
                        //3. 로그인완료 창으로 넘어가기
                        if(/*정보맞음*/this.state.loginTest){
                            this.props.onChangeLoginMode('loginCompleteMode');
                        }else{
                            alert('ID 또는 PW 정보가 일치하지 않습니다');
                        }
                    }.bind(this)}
                >
                    <p><input type="text" name="id" placeholder="ID를 입력하세요"></input></p>
                    <p><input type="password" name="pw" placeholder="PW를 입력하세요"></input></p>
                    <div>
                        <button 
                            onClick={function(){
                                this.props.onChangeLoginMode('joinMemberMode');
                            }.bind(this)}>회원가입
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" value="로그인"></input>
                    </div>
                </form>

            </div>
        );
    }
}

export default LoginPage;