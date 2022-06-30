///////////////////////CLASSES///////////////////////////////////////
class User {
    constructor(fullname, email, contact, password) {
        this.fullname = fullname;
        this.email = email;
        this.contact = contact;
        this.password = password;

    }
}

class BookApp {
    constructor() 
    {
        this.users = [];
        this.user;
    }

    register = (fullname, email, contact, password, password2) => {

        let isSuccess = false;
        //inputs are empty
        if (fullname === "" || email === "" || contact === "" || password === "" || password2 === "") {
            //bad
            alert("Something is missing")
        } else {
            //check if registered
            let flag = false;

            for (let i = 0; i < this.users.length; i++) {
                if (email === this.users[i].email || contact === this.users[i].contact) {
                    flag = true;
                    break;
                } 
            }

            if (flag) {
                alert("user already registered")
            } else {
                if (password === password2) {
                    //good
                    let newUser = new User(fullname, email, contact, password);
                    this.users.push(newUser);
                    alert(fullname + " successfully registered!");
                    isSuccess = true;

                } else {
                    //bad
                    alert("Password does not match");
                }
            }
        }

        return isSuccess;
    }

    login = (uid, pwd) => {

        let isSuccess = false;
        //empty
        if(pwd === "" || uid === "") 
        {
            //bad
            alert("Incorrect username or password")
        } 
        else 
        {
            let flag = false;

            for (let i = 0; i < this.users.length; i++)
             {
                if (uid === this.users[i].email || uid === this.users[i].contact) 
                {
                    this.user = this.users[i];
                    flag = true;
                    break;
                }
            }

            if (flag)
            {
                //good
                if (pwd === this.user.password)
                {
                    //good
                    isSuccess = true
                } 
                else 
                {
                    //bad
                    alert("Incorrect login cridetials");
                }
            } 
            else 
            {
                //bad
                alert(uid + " not registered in our system");
            }
        }
        return isSuccess;
    }
}
///////////////////FUNCTIONS//////////////////////////////////////
const register = () => {
    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let contact = document.querySelector("#contact").value;
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;

    if(app.register(fullname, email, contact, password, password2)) 
    {

        localStorage.setItem("users", JSON.stringify(app.users));
        location.href = "login.html";  
    }
}
const login = () => {
    let uid = document.querySelector("#uid").value;
    let pwd = document.querySelector("#pwd").value;

    if(app.login(uid, pwd)) 
    {
        location.href = "Home.html";
    }
}
//////////////RUNNING CODE/////////////////////////////////////
let app;

if (localStorage.getItem("users") === null) 
{
    app = new BookApp();
} 
else 
{
    app = new BookApp();
    let strArray = localStorage.getItem("users");
    let users = JSON.parse(strArray);
    app.users = users;
}
