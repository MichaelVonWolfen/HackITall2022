import "./Login.sass"


function LoginPage() {
    const handleChange = (e:any) => {
        e.preventDefaul();
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        if(!name) return
        if(!email) return
        if(!password) return

        // @ts-ignore
        fetch("http://localhost:5000/api/register", {body: JSON.stringify({name: name.value, email: email.value, password: password.value})})
        .then(res => res.json())
        .then(result => {
            if(result.message === "SUCCESS") {
                console.log("Foarte bine jupane!");

            } else {
                console.log("No no!");
            }
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form className={"loginContainer"} onSubmit={handleChange}>
                <input type="text" name="name" id="name" placeholder={"Name..."}/>
                <input type="email" name="email" id="email" placeholder={"Email..."}/>
                <input type="password" name="password" id="password" placeholder={"Password..."}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default LoginPage;