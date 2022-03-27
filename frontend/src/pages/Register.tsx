import "./Login.sass"

function LoginPage() {
    const handleChange = (e:any) => {
        e.preventDefault();
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        if(!name) return
        if(!email) return
        if(!password) return

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // @ts-ignore
        let nameVal = name.value;
        // @ts-ignore
        let passVal = password.value;
        // @ts-ignore
        let emailVal = email.value;

        var raw = JSON.stringify({
          "name": `${nameVal}`,
          "password": `${passVal}`,
          "email": `${emailVal}`
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        // @ts-ignore
        fetch("http://localhost:5000/api/register",requestOptions)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.ok === "Succes!") {
                console.log("Foarte bine jupane!");
                window.location.href = "/login"
            } else {
                console.log("No no!");
            }
        });
    }

    return (
        <div className={"registerConteiner"}>
            <h1>Register</h1>
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