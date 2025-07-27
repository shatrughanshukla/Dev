document.getElementById("fetchBtn").addEventListener("click", () => {
const userId = document.getElementById("userIdInput").value.trim();
const postsContainer = document.getElementById("posts");

if (userId === ""){
    alert("Please enter a user ID.");
    return;
}

postsContainer.innerHTML = "";

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((response) => response.json())
  .then((posts) => {
    if (posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts found for this User ID.</p>";
      return;
    }

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="comments"><strong>Loading comments...</strong></div>
        `;
      postsContainer.append(postDiv);

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => {
          const commentsDiv = postDiv.querySelector(".comments");
          commentsDiv.innerHTML = `<strong>Comments:</strong>`;
          comments.forEach((comment) => {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.innerHTML = `
                <p><strong>${comment.name}</strong> (${comment.email}):</p>
                <p>${comment.body}</p>
                `;
            commentsDiv.append(commentDiv);
          });
        })
        .catch((error) => {
          const commentsDiv = postDiv.querySelector(".comments");
          commentsDiv.innerHTML =
            "<p style='color:red;'>Error loading comments.</p>";
          console.error("Error fetching comments:", error);
        });
    });
  })
  .catch(error => {
    postsContainer.innerHTML =
      "<p style ='color: red;'>Error fetching posts.</p>";
    console.error("Error fetching posts:", error);
  });

});