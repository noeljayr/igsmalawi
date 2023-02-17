const dropdown = document.querySelectorAll("drop-container");

// notifications menu

const notifications = document.getElementById("notifications");
const notification_triger = document.getElementById("notifications-trigger");

const userBadge = document.getElementById("user-badge");

function openNotifications() {
  notifications.classList.add("dropdown-active");
  userBadge.style.display = "none";
}

window.addEventListener("mouseup", function (event) {
  if (
    (event.target != notifications &&
      event.target.parentNode != notifications) ||
    (event.target != dropdown && event.target.parentNode != dropdown)
  ) {
    notifications.classList.remove("dropdown-active");
  }
});

// events menu

const events = document.getElementById("events");
const events_trigger = document.getElementById("events-trigger");

function openEvents() {
  events.classList.add("dropdown-active");
}

window.addEventListener("mouseup", function (event) {
  if (
    (event.target != events && event.target.parentNode != events) ||
    (event.target != dropdown && event.target.parentNode != dropdown)
  ) {
    events.classList.remove("dropdown-active");
  }
});

// events menu

const help = document.getElementById("help-center");
const help_trigger = document.getElementById("help-trigger");
const middle = document.getElementById("user-middle");
const closeHelp = document.getElementById("closeHelp");
const cancel = document.getElementById("cancel");

function openHelp() {
  help.classList.add("dropdown-active");
}

middle.addEventListener("click", () => {
  help.classList.remove("dropdown-active");
});

closeHelp.addEventListener("click", () => {
  help.classList.remove("dropdown-active");
});

cancel.addEventListener("click", () => {
  help.classList.remove("dropdown-active");
});

// conversation

/* Time */
/* Time */

var messageTime = document.querySelectorAll(".message .time");

for (var i = 0; i < messageTime.length; i++) {
  messageTime[i].innerHTML = moment().format("h:mm A");
}

/* Message */

var form = document.querySelector(".conversation-compose");
var conversation = document.querySelector(".conversation-container");

form.addEventListener("submit", newMessage);

function newMessage(e) {
  var input = e.target.input;

  if (input.value) {
    var message = buildMessage(input.value);
    conversation.appendChild(message);
  }

  input.value = "";
  conversation.scrollTop = conversation.scrollHeight;

  e.preventDefault();
}

function buildMessage(text) {
  var element = document.createElement("div");

  element.classList.add("message", "sent");

  element.innerHTML =
    text +
    '<span class="metadata">' +
    '<span class="time">' +
    moment().format("h:mm A") +
    "</span>";

  return element;
}

const imgInput = document.getElementById("pick-img");
const buttonImg = document.getElementById("img-button");
buttonImg.onclick = () => {
  imgInput.click();
};

/* Create Club */

const create = document.getElementById("add-club");
const overlay = document.getElementById("club-overlay");
const cancelOverlay = document.getElementById("cancel-create");

create.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});

cancelOverlay.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

/* Join Club */

const join = document.getElementById("join");
const joined = document.getElementById("joined");

join.addEventListener("click", () => {
  join.style.display = "none";
  joined.style.display = "block";
});


joined.addEventListener("click", () => {
  joined.style.display = "none";
  join.style.display = "block";
});




let width = screen.width;


const searchBox = document.querySelector(".search-box");
const belongClubs = document.querySelector(".belong-clubs");
const chatRoom = document.querySelector(".chat-room");



const yourClubsTrigger = document.getElementById("your-clubs-trigger");
const activChatTrigger = document.getElementById("active-chatroom-trigger");
const searchTrigger = document.getElementById("search-box-trigger");

if (width <= 500) {
  
}








searchTrigger.addEventListener("click", () => {
  chatRoom.classList.remove("active-screen");
 
  
 

  belongClubs.classList.remove("active-screen");

  searchBox.classList.add("active-screen");
  
});

activChatTrigger.addEventListener("click", () => {
  belongClubs.classList.remove("active-screen");
  searchBox.classList.remove("active-screen");
  chatRoom.classList.add("active-screen");
})


yourClubsTrigger.addEventListener("click", () => {
  belongClubs.classList.add("active-screen");
  searchBox.classList.remove("active-screen");
  chatRoom.classList.remove("active-screen");
})

