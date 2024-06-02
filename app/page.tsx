import Image from "next/image";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard";

export default function Home() {
  const postMetadata = getPostMetadata("recipes");
  return (
    <main>
      <div className="flex flex-row items-center justify-center flex-wrap">
        {postMetadata.map((post, idx) => {
          return <PostCard key={idx} post={post} />;
        })}
      </div>
    </main>
  );
}
