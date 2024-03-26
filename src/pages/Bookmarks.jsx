import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlogs, getBlogs } from "../utilities/localStorageController";


const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleDelete = (id) => {
        deleteBlogs(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }

    if (blogs.length < 1) return <h1>null</h1>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    deletable={true}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Bookmarks;