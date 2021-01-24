import React,{Component,Fragment} from "react"
import { withRouter } from "react-router-dom";
import "./index.css";
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentWillMount(){
        // 发送请求
        // 存入localstorage
        // localStorage.setItem('token','ww')
        // this.props.history.push('/')
    }
    render(){
        return (
            <Fragment>
                <div className="login-container">
                    <div className="form-container">
                        <input type="text" placeholder="用户名"/>
                        <input type="password" placeholder="密码"/>
                        <button>登录</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Login)