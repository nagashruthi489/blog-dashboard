const blogForm = document.getElementById("blogForm");
const blogTableBody = document.getElementById("blogTableBody");

let blogs = [];

// Render Blogs to Table
function renderBlogs() {
  blogTableBody.innerHTML = "";
  blogs.forEach((blog, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${blog.title}</td>
      <td>${blog.category}</td>
      <td>${blog.tags}</td>
      <td>
        <button onclick="editBlog(${index})">Edit</button>
        <button onclick="deleteBlog(${index})">Delete</button>
      </td>
    `;
    blogTableBody.appendChild(row);
  });
}

// Add Blog
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const tags = document.getElementById("tags").value;

  blogs.push({ title, category, tags });
  renderBlogs();

  // Clear form
  blogForm.reset();
});

// Edit Blog
function editBlog(index) {
  const blog = blogs[index];
  document.getElementById("title").value = blog.title;
  document.getElementById("category").value = blog.category;
  document.getElementById("tags").value = blog.tags;

  // Remove existing blog to update
  blogs.splice(index, 1);
}

// Delete Blog
function deleteBlog(index) {
  blogs.splice(index, 1);
  renderBlogs();
}
