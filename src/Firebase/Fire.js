import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDTyb2W4A4T-JouONcoTHmZ4wDwu_sexTY",
  authDomain: "ecommerce-4e37e.firebaseapp.com",
  projectId: "ecommerce-4e37e",
  storageBucket: "ecommerce-4e37e.appspot.com",
  messagingSenderId: "808726226804",
  appId: "1:808726226804:web:ccaa8e1666b734667a6e21",
  measurementId: "G-S775VWF8MW",
};
const fir = initializeApp(firebaseConfig);
//  export const auth=getAuth(fir);
export default fir;

// const [passwordvalue, setpassword] = useState("");
// const [error, setState] = useState("");
// const [acceptvale, setUservalue] = useState();
// console.log("email", emailvalue);
// console.log("password", passwordvalue);
// console.log("value", acceptvale);
// const onfirebaseSubmit = async () => {
//   createUserWithEmailAndPassword(
//     getAuth(fir),
//     "afssarkhan@gmail.com",
//     1111111111
//   )
//     .then((userCredential) => {
//       const user = userCredential.user;
//       setState(user);
//       nagivate("userlogin");
//     })
//     .catch((error) => {
//       setState(error.message);
//     });
// };
// import fir from "../../Firebase/Fire";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from "firebase/auth";
