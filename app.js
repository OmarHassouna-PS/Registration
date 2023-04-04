const form = document.getElementById("form");



class Users {

 constructor (userName, password, email, phone) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.phone = phone;
}


}

function inputsRules (userInfo) {

    const patternUesrName = /^[a-z0-9]+$/;
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const patternEmail= /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,}$/;
    const patternPhone= /^07\d{8}$/;

    if(!patternUesrName.test(userInfo.userName)) {
        alert("mistake UesrName, UesrName it should be without spaces");
        return false;
    }
    else if(!patternPassword.test(userInfo.password)) {
        alert("mistake Password, UesrName it should be more than 8 characters, with at least 1 number, uppercase, and special characters");
        return false;
    }
    else if(!patternEmail.test(userInfo.email)) {
        alert("mistake Email");
        return false;
    }
    else if(!patternPhone.test(userInfo.phone)) {
        alert("mistake Phone, 10 digits starts with 07");
        return false;
    }
    return true;
}

function usernameVerification (arrUsers, newUser) {
    
    for (let index = 0; index < arrUsers.length; index++) {

        console.log(arrUsers[index].userName, newUser.userName)
        if (arrUsers[index].userName === newUser.userName) {
            alert("UserName it already exists")
            return false;
        }
    }
    return true;
}

// function Check (arrUsers, newUser) {


//     return ()
// }

form.addEventListener("submit", (event) => {

    let arrUsers = [];

    if (sessionStorage.arrUsers != null) 
        arrUsers = JSON.parse(sessionStorage.arrUsers);

    let newUser = new Users (
        event.target.userName.value,
        event.target.password.value,
        event.target.email.value,
        event.target.phone.value,
    )

    event.preventDefault(newUser);

    if (inputsRules(newUser) && usernameVerification (arrUsers, newUser)) {
        console.log("aaaaaa")
        arrUsers.push(newUser);
        sessionStorage.setItem('arrUsers', JSON.stringify(arrUsers));
        form.reset();
    }
    // console.log(Check(arrUsers, newUser));
});
