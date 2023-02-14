import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function CustomStudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#FFCC00] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#FFCC00] mr-2" />
                Go to Website
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}