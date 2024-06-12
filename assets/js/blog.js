function displayBlogPosts() {
  const postsContainer = document.getElementById('posts-container');
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");

  blogPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;

      const postContent = document.createElement('p');
      postContent.textContent = post.content;

      const postAuthor = document.createElement('p');
      postAuthor.textContent = `By: ${post.username}`;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postContent);
      postDiv.appendChild(postAuthor);

      postsContainer.appendChild(postDiv);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);

window.addEventListener('DOMContentLoaded', function() {
  const postsContainer = document.getElementById('posts-container');
  if (postsContainer) {
      displayBlogPosts();
  }
});
