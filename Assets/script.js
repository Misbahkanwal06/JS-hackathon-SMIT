import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";


const auth = getAuth();
const database = getDatabase();
let signUp = document.getElementById('SignUp');
let gotologin = document.getElementById('gotologin');

if (signUp) {
    signUp.addEventListener('click', () => {
        let fname = document.getElementById('firstname').value;
        let lname = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((resolve) => {
                // Signed in 
                const user = resolve.user;
                alert('User Created!');         //userCredential.user
                const userId = auth.currentUser.uid;
                set(ref(database, 'users/' + userId + "(" + fname + ") "), {
                    fname: fname,
                    lname: lname,
                    email: email,
                    admin: true,
                    // password: password 
                })
            })
            .catch((reject) => {
                // const errorCode = reject.code;
                const errorMessage = reject.message;
                alert(errorMessage);
                // ..
            });
    })
}

if (gotologin) {
    gotologin.addEventListener('click', () => {
        window.location.href = "index2.html";
    })
}

function dashboard() {
    window.location.href = "Crud_for_class_detail.html";
}
let LoginToAccount = document.getElementById('LoginToAccount');
if (LoginToAccount) {
    LoginToAccount.addEventListener('click', () => {
        let l_email = document.getElementById('l-email').value;
        let l_password = document.getElementById('l-password').value;

        signInWithEmailAndPassword(auth, l_email, l_password)
            .then((resolve) => {

                alert("Logged in Successfully!");
                let adminID = "WAhWFinshGe2IZ6ruWamieAjsEz2";
                if (l_email === "misbahkanwal@gmail.com" && adminID == "WAhWFinshGe2IZ6ruWamieAjsEz2") {
                    // window.location.href = "index3.html";
                } else {
                    
                    dashboard();
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    )
}


//show alerts

let selectedrow = null;
function showalert(msg, className) {
    let div = document.createElement('div');
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(msg));
    let container = document.querySelector(".container");
    let main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => {
        document.querySelector(".alert").remove();
    }, 3000);
}


//Clear All Fields

function clearFields() {
    let fname = document.getElementById("Fname");
    let lname = document.getElementById("Lname");
    let Roll = document.getElementById("Roll");
    let email = document.getElementById("email");

    fname.value = "";
    lname.value = "";
    Roll.value = "";
    email.value = "";

}


//Student portal
let std_form = document.getElementById('std-form');

std_form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Get form values
    let fname = document.getElementById("Fname").value;
    let lname = document.getElementById("Lname").value;
    let rn = document.getElementById("Roll").value;
    let email = document.getElementById("email").value;
    let student_list = document.getElementById("student-list");

    if (fname == "" && lname == "" && rn == "" && email == "") {
        showalert("Please Fill All fields", "danger");
    }
    else {

        if (selectedrow == null) {
            let row = document.createElement("tr");

            row.innerHTML = `
                  <td>${fname}</td>
                  <td>${lname} </td>
                  <td>${rn} </td>
                  <td>${email} </td>
                
                  
                   `;
            student_list.appendChild(row);
            selectedrow = null;
            showalert("your attendence has submitted", "danger");

        }

        clearFields();
    }

});

// Back to login button

let BackToLogin = document.getElementById('BackToLogin');
if (BackToLogin) {
    BackToLogin.addEventListener('click', () => {
        window.location.href = "index2.html";
    })
}

//Signout code
let SignOut = document.getElementById('SignOut');
if (SignOut) {
    SignOut.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert('Logged OUT');
            window.location.href = "index.html";
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
    })
}
