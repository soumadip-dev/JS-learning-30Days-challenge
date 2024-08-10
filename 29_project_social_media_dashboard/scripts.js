document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple authentication check
  if (username === "user" && password === "password") {
    sessionStorage.setItem("loggedInUser", username);
    document.getElementById("login-container").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    alert("Invalid username or password");
  }
});

window.onload = function () {
  if (sessionStorage.getItem("loggedInUser")) {
    document.getElementById("login-container").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    document.querySelector(".container").style.display = "none";
  }
};

let posts = [];

document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const text = document.getElementById("post-text").value;
  const image = document.getElementById("post-image").files[0];
  const username = sessionStorage.getItem("loggedInUser");
  const timestamp = new Date().toLocaleString();

  const newPost = { text, image, username, timestamp, likes: 0, comments: [] };
  posts.push(newPost);
  displayPosts();
});

function displayPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <p><strong>${post.username}</strong> <small>${
      post.timestamp
    }</small></p>
            <p>${post.text}</p>
            ${
              post.image
                ? `<img src="${URL.createObjectURL(
                    post.image
                  )}" alt="Post Image">`
                : ""
            }
            <button onclick="likePost(${posts.indexOf(post)})">Like (${
      post.likes
    })</button>
            <button onclick="commentPost(${posts.indexOf(
              post
            )})">Comment</button>
        `;
    feed.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes += 1;
  displayPosts();
}

function commentPost(index) {
  const comment = prompt("Enter your comment:");
  if (comment) {
    posts[index].comments.push(comment);
    displayPosts();
  }
}
