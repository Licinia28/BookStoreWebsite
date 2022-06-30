//class for user
class User{
    constructor(fullnames, email, contact, password)
    {
        fullnames = this.fullnames;
        email = this.email;
        contact = this.contact;
        password = this.password;
    }
}
 
class LocalApp
{
    constructor() 
    {
        this.users = [];
        this.isUserOnline = false;
    }

    //
    addUser(fullnames, email, contact, password)
    {
        //check if the inputs are filled
        if (fullnames === "" || email === "" || contact === "" || password === "" || password2 ==="")
        {
            //fields are empty
            alert("Please fill in all the required fields");
        } else {
            //user is already registered
            let flag = false;

            for (let k = 0; k < this.users.length; k++)
            {
                if (email === this.users[k].email || contact === this.users[k].contact)
                {
                    //user already exist
                    flag = true;
                    break;
                }
            }

            //check if user is registered
            if(flag)
            {
                //user is registered
                alert(fullnames + " User is already registered");
            } 
            else
            {
                //check if passwords match
                if (password === password2)
                {
                    //register the user
                    let newUser = new User(fullnames, email, contact, password);
                    this.users.push(newUser);
                    alert(fullnames + " Registered Successfully !");
                } 
                else
                {
                    //password does not match
                    alert("Passwords does not match");
                }
            }
        }
    }

    loginUser(uid, password)
    {
        //check if the user exist
        let flag = false;
        let user;
        for (let k = 0; k < this.users.length; k++)
        {
            if (uid === this.users[k].email || uid === this.users[k].contact) 
            {
                flag = true;
                user = this.users[k];
                break;
            }
        }

        if (uid === "" || password === "") {
            alert("Please fill in the required inputs");
            return false;
        }

        //if user exist
        if(flag) {
            //check if the password is correct
            if(password === user.password)
            {
                alert("User logged in");
                this.isUserOnline = true;
                return true;
            } else
            {
                alert("Password incorrect");
                return false;
            }
        } else
        {
            alert("User not registered please register");
            return false;
        }

    }

    logoutUser ()
    {
        this.isUserOnline = false;
    }
}

