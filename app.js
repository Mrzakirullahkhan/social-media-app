// fist name 
const firstName = document.querySelector("#firstname");
const firstName1 = firstName.value;
// last name
const lastName = document.querySelector("#lastname");
const lastName1 = lastName.value;
// email 
const fullEmail = document.querySelector("#fullemail");
const fullEmail1 = fullEmail.value;
// new paswrd
const newPassword = document.querySelector("#newpassward");
// const newPassword1 = newPassword.value;
// day
const day = document.querySelector("#day");
const day1 = day.value;
// month
const month = document.querySelector("#month");
const month1 = month.value;

// year
const year = document.querySelector("#year");
const year1 = year.value;
// my signup btn
const signup = document.querySelector('#signUp');
// login btn
const login_btn = document.querySelector("#loginbtn");
// emaillogin
const email_login = document.querySelector('#myemail');
// paswrd login
const password_login = document.querySelector('#mypassword')
// console.log(password_login)

// ...............


// my array for data 
let user_array = JSON.parse(localStorage.getItem('myUsers')) || [];


// action on sign up button 
const signUpAction = () => {

    // now for checking the dublicate email in array of object 
    const myUserEmail = user_array.filter((myuser) => {
        return myuser.fullEmail === fullEmail.value;

    })
    if (myUserEmail.length) {
        return alert("this Email is already exist")

    }
    //    now for checking the dublicate password in array of object 
    const userPass = user_array.filter((userPass) => {
        return userPass.newPassword == newPassword.value;
    })
    if (userPass.length) {
        return alert("this  password is already exist ")

    }
    if (newPassword.value.length < 8) {
        return alert("the password must be atleast 8 letters ")
    }
    if (firstName.value == "" || lastName.value == "" || fullEmail.value == "" || newPassword.value == "") {
        return alert("please fill the requirment for sign up")
    }
    else {

        let obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            fullEmail: fullEmail.value,
            newPassword: newPassword.value,
        }
        user_array.push(obj);
        localStorage.setItem('myUsers', JSON.stringify(user_array))

        // for set time out for to show the account is created 
        setTimeout(function () {
            var element = document.getElementById("myElement");
            element.style.display = "block";
            
            setTimeout(function () {
                element.style.display = "none";
            }, 3000);
        }, 1000);

        allInputClear();
    }



}


signup.addEventListener('click', signUpAction)




// ab yaha me login btn k liye kaam kr rha hu 



login_btn.addEventListener('click', function () {
    // for check the email for login 
    const myUserEmail = user_array.filter((myuser) => {
        return myuser.fullEmail == email_login.value;
        
    })
    console.log(myUserEmail)
    
    // for check the password for login
    const userPass = user_array.filter((userPass) => {
        return userPass.newPassword == password_login.value;
    })
    console.log(userPass)



    if (email_login.value == "") {
        alert("please Enter email adress")
    }
    else if (password_login.value == "") {
        alert("please Enter your password")
    }
    else if (email_login.value !== myUserEmail[0]?.fullEmail) {
        alert("your email is incorrect")
    }
    else if (password_login.value !== userPass[0]?.newPassword) {
        alert("your password is incorrect")
    }
    else{
        alert('Logged In');
        localStorage.setItem('loginUser', JSON.stringify(userPass[0]));
        
        window.location.href= "./index1.html"
    }


})


function allInputClear() {
        firstName.value = ""
        lastName.value = ""
        fullEmail.value = ""
        newPassword.value =""

}





/////.
