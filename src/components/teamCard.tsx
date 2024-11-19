import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export interface TeamProp {
    image: string;
    Member: string;
    memTitle: string;
}
export default function TeamCard(props: TeamProp) {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Image src={props.image} alt={props.Member} width={70} height={0} className="h-auto rounded-md md-3" />
            <div className="text-center">
                <h1 className="text-md font-medium">{props.Member}</h1>
                <p>{props.memTitle}</p>

            </div>
            <p className="flex flex-row space-x-4">
                <FaLinkedinIn /> <FaXTwitter /> <FaGithub />
            </p>
        </div>

    )
}