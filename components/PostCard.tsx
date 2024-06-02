import Link from "next/link";
import React from "react";

const PostCard = (props: any) => {
  const { post } = props;
  return (
    <Link
      className="flex flex-row m-4 justify-between"
      href={`/recipe/${post.slug}`}
    >
      <div className="border border-black/20 rounded-xl p-4 w-80 h-60">
        <h3 className="text-2xl font-bold">{post.title}</h3>
        <hr className="my-2" />
        <p className="text-md py-2">{post.bio}</p>
        <div className="flex flex-row justify-between py-4">
          <div className="bg-slate-200 p-2 rounded-lg">
            <h5 className="text-sm font-bold">Prep Time</h5>
            <p className="text-sm font-light">{post.prep_time}</p>
          </div>
          <div className="bg-slate-200 p-2 rounded-lg">
            <h5 className="text-sm font-bold">Cook Time</h5>
            <p className="text-sm font-light">{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
