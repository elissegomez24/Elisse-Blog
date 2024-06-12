function validateForm() {
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (username === "" || title === "" || content === "") {
        showMessage("Please complete the form with a username, title, and content.");
        return false;
    }

    return true;
}

function storeBlogPost() {
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    const blogPost = {
        username: username,
        title: title,
        content: content,
        timestamp: new Date().toISOString(),
    };

    const blogPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    blogPosts.push(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

function showMessage(message) {
    alert(message);
}

document.getElementById("blog-form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
        storeBlogPost();
        window.location.href = "blog.html";
    }
});
