fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    const postsContainer = document.getElementById("posts");
    data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.style.border = "1px solid #ccc";
        postDiv.style.margin = "10px";
        postDiv.style.padding = "10px";
        postDiv.style.backgroundColor = "#f9f9f9"
        postDiv.style.marginBottom = "10px";
        postDiv.style.borderRadius = "5px";
        postDiv.style.color = "black";

        postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>User ID:</strong>${post.userId}</p>
        <p><strong>Post ID:</strong>${post.id}</p>
        <p>${post.body}</p>
        `;

        postsContainer.appendChild(postDiv);
    });
})
.catch(error => {
    console.error("Error fetching posts:", error);
});
/*
    Explanation:
        fetch(...): makes an HTTP GET request to the given URL.
        .then(response => response.json()): converts the raw response into JSON format (JavaScript can read it).
        .then(data => {...}): this data is now an array of posts.
        .catch(...): if something goes wrong (e.g., internet issue), the error is caught and printed.     
*/
