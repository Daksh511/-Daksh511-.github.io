const firebaseConfig = {
    apiKey: "AIzaSyBJ_UI0Qc0Xe9GUDYJ2nJyr_Va7DocVDp8",
    authDomain: "login-fdd7d.firebaseapp.com",
    projectId: "login-fdd7d",
    storageBucket: "login-fdd7d.appspot.com",
    messagingSenderId: "281731942648",
    appId: "1:281731942648:web:f28151e1cd7a28953cd30d",
    measurementId: "G-WYMBY17DCZ"
};
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var datab  = firebase.database().ref('data');

// function UserRegister(){
//     var email = document.getElementById('eemail').value;
//     var password = document.getElementById('lpassword').value;
//     firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

//     }).catch(function (error){
//         var errorcode = error.code;
//         var errormsg = error.message;
//     });
//     var un = document.forms["form"]["eemail"].value;
//     var pw = document.forms["form"]["lpassword"].value;
//     if(un == "student" && pw == "charusat"){
//         window.location.href="index.html";
//     }
//     else{
//         alert("Invalid Username or Password");
//     }

// }
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const auth = firebase.auth();
async function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    // promise.catch( e => alert(e.msg));
    // window.open("https://www.google.com","_self");
    var un = document.forms["form"]["eemail"].value;
    var pw = document.forms["form"]["lpassword"].value;
    if(un == "student" && pw == "charusat"){
        let delayres = await delay(2000);
        window.location.href="index.html";
    }
    else{
        alert("Invalid Username or Password");
    }
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function getId(id){
    return document.getElementById(id).value;
}
