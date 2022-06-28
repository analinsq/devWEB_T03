import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

const SignUpPage = ({setLogged,setShowToast,setToast}) =>
    <FirebaseContext.Consumer>
        {(firebase) => <SignUp 
                            firebase={firebase} 
                            setLogged={setLogged} 
                            setShowToast={setShowToast} 
                            setToast={setToast}/>}
    </FirebaseContext.Consumer>

function SignUp(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const [validate,setValidate] = useState({login:'',password:'',repassword:''})
    const navigate = useNavigate()

    const validateFields = () => {
        let res = true
        setValidate({login:'',password:'',repassword:''})
        
        if(password!==repassword){
            props.setToast({header:'Erro!',body:'Repita a mesmo senha!'})
            props.setShowToast(true)
            setLoading(false)
            setValidate({login:'',password:'is-invalid',repassword:'is-invalid'})
            res = false
           
        }

        if(login === '' || password === '' || repassword === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {login:'',password:'',repassword:''}
            if(login === '') validateObj.login = 'is-invalid'
            if(password === '') validateObj.password = 'is-invalid'
            if(repassword === '') validateObj.repassword = 'is-invalid'
            setValidate(validateObj)
        }

         
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        FirebaseUserService.signup(
            props.firebase.getAuthentication(),
            login,
            password,
            (res,content) => {
                if (res) {
                    setLoading(false)
                    props.firebase.setUser(content)
                    props.setLogged(true)
                    navigate('/listStudent')
                } else {
                    // alerta para dados incorretos
                    props.setToast({header:'Erro!',body:content})
                    props.setShowToast(true)
                    setLoading(false)
                }
            }
        )
    }

    const renderSubmitButton = () => {
        if (loading) {
            return (
                <div style={{ paddingTop: 20 }}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span style={{ marginLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        }
        return (
            <>
                <div className="form-group" style={{ paddingTop: 20 }}>
                    <input type="submit" value="Efetuar Cadastro" className="btn btn-primary" />
                </div>
            </>
        )
    }

    return (
        <div className="content-login" style={{ marginTop: 50 }}>
            {/*Toast*/}
            <main style={{ width: '40%' }}>
                <h2>Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login*</label>
                        <input type="text"
                            className={`form-control ${validate.login}`}
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Senha* </label>
                        <input type="password"
                            className={`form-control ${validate.password}`}
                            value={password ?? ""}
                            name="password"
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Repita a Senha* </label>
                        <input type="password"
                            className={`form-control ${validate.repassword}`}
                            value={repassword ?? ""}
                            name="repassword"
                            onChange={(event) => { setRepassword(event.target.value) }} />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default SignUpPage