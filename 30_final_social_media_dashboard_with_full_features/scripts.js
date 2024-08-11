// DOM Elements
const registrationForm = document.getElementById("registerForm");
const loginFormElement = document.getElementById("loginForm");
const dashboard = document.getElementById("dashboard");
const login = document.getElementById("login");
const registration = document.getElementById("registration");
const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("posts");
const notificationsContainer = document.getElementById("notifications");
const profileButton = document.getElementById("viewProfile");
const profilePage = document.getElementById("profile");
const profileForm = document.getElementById("profileForm");
const backToDashboardButton = document.getElementById("backToDashboard");
const profilePicInput = document.getElementById("profilePicInput");
const profilePicture = document.getElementById("profilePicture");
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");

// Utility functions
function showElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

function getStoredUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function storeUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getStoredPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

function storePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Event Handlers
showLogin.addEventListener("click", () => {
  hideElement(registration);
  showElement(login);
});

showRegister.addEventListener("click", () => {
  hideElement(login);
  showElement(registration);
});

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const existingUser = getStoredUser();
  if (existingUser) {
    alert("User already registered. Please log in.");
    return;
  }

  storeUser({ username, email, password });
  alert("Registration successful. Please login.");
  hideElement(registration);
  showElement(login);
});

loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = getStoredUser();
  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    hideElement(login);
    showElement(dashboard);
    loadPosts();
  } else {
    alert("Invalid username or password.");
  }
});

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const postContent = document.getElementById("postContent").value;
  const postImageInput = document.getElementById("postImage");
  const storedUser = getStoredUser();
  const posts = getStoredPosts();

  const newPost = {
    username: storedUser.username,
    content: postContent,
    image: postImageInput.files[0]
      ? URL.createObjectURL(postImageInput.files[0])
      : null,
    likes: 0,
    comments: [],
  };

  posts.push(newPost);
  storePosts(posts);
  displayPost(newPost);
  document.getElementById("postContent").value = "";
  postImageInput.value = ""; // Clear the file input
});

function displayPost(post) {
  const postElement = document.createElement("div");
  postElement.className = "post";
  postElement.innerHTML = `
        <div class="username">${post.username}</div>
        <div class="content">${post.content}</div>
        ${
          post.image
            ? `<img src="${post.image}" alt="Post Image" class="post-image">`
            : ""
        }
        <div class="actions">
            <button onclick="likePost(this)">Like</button>
            <button onclick="commentPost(this)">Comment</button>
            <span class="likes">Likes: <span class="like-count">${
              post.likes
            }</span></span>
            <span class="comments">Comments: <span class="comment-count">${
              post.comments.length
            }</span></span>
        </div>
    `;
  postsContainer.appendChild(postElement);
}

function loadPosts() {
  const posts = getStoredPosts();
  posts.forEach(displayPost);
}

function likePost(button) {
  const postElement = button.closest(".post");
  const likeCount = postElement.querySelector(".like-count");
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
  showNotification("Your post has been liked!");
}

function commentPost(button) {
  const postElement = button.closest(".post");
  const commentCount = postElement.querySelector(".comment-count");
  commentCount.textContent = parseInt(commentCount.textContent) + 1;
  showNotification("Your post has a new comment!");
}

function showNotification(message) {
  const notificationElement = document.createElement("li");
  notificationElement.textContent = message;
  notificationsContainer.appendChild(notificationElement);
}

profileButton.addEventListener("click", () => {
  hideElement(dashboard);
  showElement(profilePage);
  loadProfile();
});

backToDashboardButton.addEventListener("click", () => {
  hideElement(profilePage);
  showElement(dashboard);
});

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("profileUsername").value;
  const email = document.getElementById("profileEmail").value;
  const file = profilePicInput.files[0];

  const user = getStoredUser();
  user.username = username;
  user.email = email;
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      user.profilePicture = event.target.result;
      storeUser(user);
      loadProfile();
    };
    reader.readAsDataURL(file);
  } else {
    storeUser(user);
    loadProfile();
  }
});

function loadProfile() {
  const user = getStoredUser();
  if (user) {
    document.getElementById("profileUsername").value = user.username;
    document.getElementById("profileEmail").value = user.email;
    if (user.profilePicture) {
      profilePicture.src = user.profilePicture;
    } else {
      profilePicture.src = "default-profile.png"; // Set a default image if none is uploaded
    }
  }
}

// Function to load and display the profile photo
function loadProfilePhoto() {
  const user = getStoredUser();
  if (user && user.profilePicture) {
    document.getElementById("profileDashboardPic").src = user.profilePicture;
  } else {
    document.getElementById("profileDashboardPic").src = "default-profile.png"; // Set a default image if none is uploaded
  }
}

// Update the login form submission to include profile photo loading
loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = getStoredUser();
  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    hideElement(login);
    showElement(dashboard);
    loadPosts();
    loadProfilePhoto(); // Load the profile photo when dashboard is shown
  } else {
    alert("Invalid username or password.");
  }
});

// Update the profile update form submission to also update the dashboard profile photo
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("profileUsername").value;
  const email = document.getElementById("profileEmail").value;
  const file = profilePicInput.files[0];

  const user = getStoredUser();
  user.username = username;
  user.email = email;
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      user.profilePicture = event.target.result;
      storeUser(user);
      loadProfile();
      loadProfilePhoto(); // Update the profile photo in the dashboard
    };
    reader.readAsDataURL(file);
  } else {
    storeUser(user);
    loadProfile();
    loadProfilePhoto(); // Update the profile photo in the dashboard
  }
});
// DOM Elements for login and register buttons
const loginButton = document.getElementById("showLogin");
const registerButton = document.getElementById("showRegister");

// Function to show the dashboard and hide login/register buttons
function showDashboard() {
  hideElement(login);
  hideElement(registration);
  showElement(dashboard);
  loadPosts();
  loadProfilePhoto(); // Load the profile photo when dashboard is shown
}

// Event Handlers
showLogin.addEventListener("click", () => {
  hideElement(registration);
  showElement(login);
});

showRegister.addEventListener("click", () => {
  hideElement(login);
  showElement(registration);
});

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const existingUser = getStoredUser();
  if (existingUser) {
    alert("User already registered. Please log in.");
    return;
  }

  storeUser({ username, email, password });
  alert("Registration successful. Please login.");
  hideElement(registration);
  showElement(login);
});

loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = getStoredUser();
  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    showDashboard(); // Call the function to show the dashboard and hide login/register
  } else {
    alert("Invalid username or password.");
  }
});

// Optional: Hide login/register buttons when showing the dashboard
function showDashboard() {
  hideElement(loginButton);
  hideElement(registerButton);
  hideElement(registration);
  hideElement(login);
  showElement(dashboard);
  loadPosts();
  loadProfilePhoto(); // Load the profile photo when dashboard is shown
}
