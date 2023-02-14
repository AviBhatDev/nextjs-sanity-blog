import { ArrowUpRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
    // console.log(posts);
   return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 gap-10 gap-y-16 pb-10 xl:pb-24">
            {/* Posts */}
            {posts.map(post => (
                <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                    <div className="flex flex-col group cursor-pointer border-4 p-5 bg-white border-black rounded-3xl">
                        <div className="flex justify-between border-b-4 -mr-5 -ml-5 pb-4 pl-5 pr-5 border-black mb-8">
                            <div className="flex space-x-2">
                                <CalendarIcon className="h-6" />
                                <p className="font-semibold">
                                    {new Date(post._createdAt).toLocaleDateString(
                                        "en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        }
                                    )}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                {post.categories.map((category) => (
                                    <div className="bg-[#F16363] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                        <p>{category.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image className="object-cover object-left lg:object-center rounded-3xl" src={urlFor(post.mainImage).url()} alt={post.author.name} fill />
                            {/* <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                <div>
                                    <p className="font-bold">
                                        {post.title}
                                    </p>
                                    <p>
                                        {new Date(post._createdAt).toLocaleDateString(
                                            "en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            }
                                        )}
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                    {post.categories.map((category) => (
                                        <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                            <p>{category.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                        <div className="mt-5 flex-1">
                            <p className="text-3xl font-bold text-center mt-5 mb-5">{post.title}</p>
                            <p className="line-clamp-2 text-gray-500">{post.description}</p>
                        </div>
                        <div className="mt-5 font-bold flex items-center justify-center">
                            {/* <hr className="w-20 h-1 bg-black border-0 rounded md:my-10 dark:bg-gray-700" /> */}
                            <div className="font-semibold pr-10 pl-10 pt-3 pb-3 bg-[#FFCC00] rounded-3xl border-4 border-black flex items-center">Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4 text-black" /> </div>
                            {/* <hr className="w-20 h-1 bg-black border-0 rounded md:my-10 dark:bg-gray-700" /> */}
                        </div>
                    </div>
                </ClientSideRoute>
            ))}
        </div>
    </div>
   )
}

export default BlogList