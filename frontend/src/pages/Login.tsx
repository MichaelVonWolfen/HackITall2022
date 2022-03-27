import "./Login.sass"
import { Link } from "react-router-dom";

function LoginPage() {
    const handleChange = (e:any) => {
        e.preventDefaul();
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        if(!email) return
        if(!password) return

        // @ts-ignore
        fetch("http://localhost:5000/api/login", {body: JSON.stringify({email: email.value, password: password.value})})
        .then(res => res.json())
        .then(result => {
            if(result.message === "SUCCESS") {
                localStorage.setItem("token", result.token);
            } else {
                console.log("No no!");
            }
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form className={"loginContainer"} onSubmit={handleChange}>
                <input type="email" name="email" id="email" placeholder={"Email..."}/>
                <input type="password" name="password" id="password" placeholder={"Password..."}/>
                <button type="submit">Login</button>
                <Link to="/register"><button>Register</button></Link>
            </form>
        </div>
    )
}

export default LoginPage;