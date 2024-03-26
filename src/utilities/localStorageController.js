import toast from 'react-hot-toast';

//functions for getting and setting
export const getBlogs = () => {

    let blogs = [];
    //try to get data from local storage
    const storedBlogs = localStorage.getItem('storedBlog');

    if (storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}


//save toast

export const saveBlogs = (blogItem) => {

    let blogs = getBlogs();

    //check if the blog already exists
    const isExists = blogs.find(b => b.id === blogItem.id);
    
    if (isExists) {
        return toast.error('Already Bookmarked!');
    }
    blogs.push(blogItem);

    //setting in localStorage
    localStorage.setItem('storedBlog', JSON.stringify(blogs));
    toast.success('Successfully Bookmarked!');
}


//delete toast

export const deleteBlogs = (id) => {

    let blogs = getBlogs();

    //creating a new var in which the blog in question is not present
    const remainingBlogs = blogs.filter( b => b.id !== id);

    //setting in localStorage
    localStorage.setItem('blogs', JSON.stringify(remainingBlogs));
    toast.success('Blog removed from Bookmarks!');
}