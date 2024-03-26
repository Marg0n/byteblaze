export const getBlogs = () => {

    let blogs = [];
    //try to get data from local storage
    const storedBlogs = localStorage.getItem('storedBlog');

    if (storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}