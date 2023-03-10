import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full mx-auto">
                    <Image className="object-contain" src={urlFor(value).url()} alt="Blog Post Image" height={200} width={10000} />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-[1.5rem] md:ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal pl-5">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-3 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-3 font-bold">{children}</h2>
        ),
        h3: ({ children}: any) => (
            <h3 className="text-3xl py-3 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-3 font-bold">{children}</h4>
        ),
        h5: ({ children }: any) => (
            <h5 className="text-xl py-3 font-bold">{children}</h5>
        ),
        h6: ({ children }: any) => (
            <h6 className="text-xl py-10 font-bold">{children}</h6>
        ),
        normal: ({ children}: any) => (
            <p className="py-2">{children}</p>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-[#FFCC00] border-l-4 pl-5 py-5 my-5">
                {children}
            </blockquote>
        ),
    },

    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;

            return (
                <Link href={value.href} rel={rel} className="text-[#ff4800] hover:underline hover:decoration-[#ff4800] font-medium">{children}</Link>
            );
        },
    },
}