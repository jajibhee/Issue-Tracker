// Initialize Firebase
const firebase = require("firebase");
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyA00cyUoVUw-7gQsT-a92kym7lzC4Z7UmM",
  authDomain: "contact-forms-3652b.firebaseapp.com",
  databaseURL: "https://contact-forms-3652b.firebaseio.com",
  projectId: "contact-forms-3652b",
  storageBucket: "contact-forms-3652b.appspot.com",
  messagingSenderId: "629921979765"
};
firebase.initializeApp(config);

//Reference a collection, which are like tables...
var messagesRef = firebase.database().ref("messages");

//listen for form add
document.getElementById("add-btn").addEventListener("click", addForm);

function addForm(e) {
  e.preventDefault();
  let issue = getValue("issue");
  let agent = getValue("agent");

  //save the input values.
  saveMessage(issue, agent);

  //Hide the alert
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2500);

  let forms = document.querySelectorAll(".form");
  forms.forEach(form => {
    form.reset();
  });
}

//get values of the input field
function getValue(id) {
  return document.getElementById(id).value;
}

//create a function to save the messages to firebase
function saveMessage(issue, agent) {
  let newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    issue: issue,
    agent: agent
  });
}
