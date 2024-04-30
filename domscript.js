const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh

	function addBlog(blog){

    for (let i=0;i<blog.length;i++){

    
      const blogPost = document.createElement("div");
      blogPost.classList.add('blog-post');
      const blogHeader = document.createElement('div');
      blogHeader.classList.add('blog-header');
      const h2heading = document.createElement('h2');
      h2heading.classList.add('blog-title');
      h2heading.innerHTML = blog[i].title;
      const pdate = document.createElement('p');
      pdate.classList.add('blog-date');
      pdate.innerHTML = blog[i].date;
      const pContent = document.createElement('p');
      pContent.classList.add('blog-content');
      pContent.innerHTML = blog[i].content;
      
      
      blogHeader.appendChild(h2heading);
      blogHeader.appendChild(pdate);
      blogHeader.appendChild(pContent);
      blogPost.appendChild(blogHeader);
      blogPost.appendChild(pContent);
      
      const blogList = document.querySelector('.blog-list').appendChild(blogPost);
    }
  }

  addBlog(blogData);

