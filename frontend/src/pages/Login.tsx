import "./Login.sass"
import { Link } from "react-router-dom";

function LoginPage() {
    const handleChange = (e:any) => {
        e.preventDefault();
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        if(!email) return
        if(!password) return

        // @ts-ignore
        let name = email.value;
        // @ts-ignore
        let pass = password.value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "name": `${name}`,
          "password": `${pass}`
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        

        //console.log(JSON.stringify({name: name, password: pass}));
        // @ts-ignore
        fetch("http://localhost:5000/api/login", requestOptions)
        .then(res => res.json())
        .then(result => {
            localStorage.setItem("token", result.token);
            window.location.href = "/charts"
        });
    }

    return (
        <div className={"lol"}>
            <h2>Login</h2>
            <form className={"loginContainer"} onSubmit={handleChange}>
                <input type="text" name="email" id="email" placeholder={"Name..."}/>
                <input type="password" name="password" id="password" placeholder={"Password..."}/>
                <button type="submit">Login</button>
                <a href="/register">Register</a>
            </form>
        </div>
    )
}

export default LoginPage;