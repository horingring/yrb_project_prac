import React, { Component } from 'react';

class JoinMemberPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode : 'joinMemberMode'
        }
    }

    render(){
        var joinMode = null;
        if(this.state.mode === 'joinMemberMode'){
            joinMode =
                <div className="joinMember">
                    <h2>회원가입 페이지</h2>
                    <form 
                    action="./"
                    method="post"
                    onSubmit={function(e){
                            e.preventDefault();
                            //입력받은 데이터를 보내는 로직부분
                            this.setState({
                                mode : 'joinComplete'
                            });
                            }.bind(this)
                    }>
                        <p><input type="hidden" name="index"></input></p>
                        <p><input type="text" name="id" placeholder="id를 입력하세요"></input></p>
                        <p><input type="password" name="pw" placeholder="pw를 입력하세요"></input></p>
                        <p><input type="text" name="nick" placeholder="닉네임을 입력하세요"></input></p>
                        <p><input type="submit" value="회원가입"></input></p>
                    </form> 
                </div>
        }else if(this.state.mode === 'joinComplete'){
            joinMode =
                <div className="joinComplete">
                    <div>
                        <p>회원가입이 완료되었습니다!</p>
                        <button
                            onClick={function(){
                                this.props.onChangeLoginMode('loginMode')
                            }.bind(this)}>  
                        로그인 페이지로</button>
                    </div>
                </div>
        }
        return (
            <div>
                {joinMode}
            </div>
        );
    }
}

export default JoinMemberPage;