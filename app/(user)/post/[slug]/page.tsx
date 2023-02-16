import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { CalendarIcon } from "@heroicons/react/24/solid";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 30; // Revalidate this page every 30 seconds


export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function Post({ params: { slug }}: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });
  // console.log(post);

  return (
    <article className="relative border-4 p-5 bg-white border-black rounded-3xl mb-10 mr-6 ml-6 xl:mr-0 xl:ml-0 boxShadow">
      <section className="space-y-2 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="h-[15rem] md:h-[30rem]">
            <Image className="object-cover object-center mx-auto" src={urlFor(post.mainImage).url()} alt={post.author.name} fill />
          </div>
          {/* <section className="p-5 bg-[#FFCC00] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">
                  {post.title}
                </h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image className="rounded-full" src={urlFor(post.author.image).url()} alt={post.author.name} height={40} width={40} />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>
                    TODO: Author Bio
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">
                {post.description}
              </h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category) => (
                    <p key={category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                      {category.title}
                    </p>
                  ))}
              </div>
            </div>
          </section> */}
        </div>
      </section>
      <section className="py-10">
        <h1 className="text-4xl font-extrabold text-center">{post.title}</h1>
        <div className="flex items-center justify-center mt-5 space-x-5">
          <div className="flex items-center justify-center space-x-2">
            <CalendarIcon className="h-6" />
            <p className="text-lg font-semibold">
              {new Date(post._updatedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </p>
          </div>
          <div className="flex items-center">
              {post.categories.map((category) => (
                  <div className="bg-[#F16363] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>
      <PortableText 
        value={post.body} 
        components= {RichTextComponents} 
      />
      <section className="py-20">
        <div className="relative">
          <span className="absolute top-[50px] mr-[127px] h-[4px] bg-black right-[50%] left-[-20px] after:content-[''] after:w-[4px] after:h-[18px] after:bg-black after:rotate-[25deg] after:right-[-1px] after:absolute after:top-[-7px]"></span>
          <span className="absolute top-[50px] ml-[127px] h-[4px] bg-black left-[50%] right-[-20px] before:content-[''] before:w-[4px] before:h-[18px] before:bg-black before:rotate-[-25deg] before:left-[-1px] before:absolute before:top-[-7px]"></span>
          <Image className="rounded-full mx-auto w-[120px] h-[120px]" src={urlFor(post.author.image).url()} alt={post.author.name} height={40} width={40} />
          <div className="">
            <h3 className="text-4xl font-bold text-center mt-5">{post.author.name}</h3>
            <p className="text-center w-auto md:w-[40rem] mx-auto font-medium mt-3">{post.author.description}</p>
          </div>
        </div>  
      </section>
    </article>
  )
}

export default Post