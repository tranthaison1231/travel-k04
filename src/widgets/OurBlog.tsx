import {ReadPost} from "~/shared/ui/atoms/ReadPost"

interface OurBlogProps {
    blogImage: string;
    day: string;
    title: string;
    content: string;
}

export function OurBlog({ blogImage, day, title, content }: OurBlogProps) {
    return (
        <div className="">
            <img src={blogImage} alt="" className="" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">{day}</p>
            <p className="text-xl font-semibold mb-3">{title}</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">{content}</p>
            <ReadPost 
                
            />
        </div>
    )
}