import React, { Component } from 'react';

class LoginPage extends Component{
    render(){
        return (
            <div>
                <h2>로그인 페이지</h2>
                <form 
                    action="./"
                    onSubmit={function(e){
                        e.preventDefault();
                        //로그인 로직
                    }.bind(this)}
                >
                    <p><input type="text" name="id" placeholder="ID를 입력하세요"></input></p>
                    <p><input type="password" name="pw" placeholder="PW를 입력하세요"></input></p>
                    <div>
                        <button 
                            onClick={function(){
                                this.props.onChangeMode('joinMemberMode');
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