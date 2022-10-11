import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blog = useLoaderData();
    let blogQst = blog.quistion;
    return (
        <div>
            <h1 className="mt-5 bg-slate-900 text-white p-3 rounded w-[30%] mx-[30%]">React Questions</h1>
            <div  className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-[10%] mx-5">
            {
                blogQst.map(blogQuestion =>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            {blogQuestion.Quistion}
                        </div>
                        <div className="collapse-content">
                            <p>{blogQuestion.Ans}</p>
                        </div>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Blog;