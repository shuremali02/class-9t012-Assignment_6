import TeamCard, { TeamProp } from "@/components/teamCard"
import Link from "next/link"

export default function Team() {
    const teamMembers: TeamProp[] = [
        {
            image: "/images/team1.svg",
            Member: "James Nduku",
            memTitle: "Marketing Coordinator"
        },
        {
            image: "/images/team2.svg",
            Member: "Joseph Munyambu",
            memTitle: "Nursing Assistant"
        },
        {
            image: "/images/team3.svg",
            Member: "Joseph Ngumbau",
            memTitle: "Medical Assistant"
        },
        {
            image: "/images/team4.svg",
            Member: "Erick Kipkemboi",
            memTitle: "Web Designer"
        },
        {
            image: "/images/team5.svg",
            Member: "Stephen Kerubo",
            memTitle: "President of Sales"
        },
        {
            image: "/images/team6.svg",
            Member: "John Leboo",
            memTitle: "Dog Trainer"
        },
    ]

    return (
        <div className="flex bg-[#F7F7F7] w-full max-w-[1280px] flex-col min-h-screen items-center text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Our team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            <div className="grid grid-cols  md:grid-cols-3 gap-8 px-8 w-full max-w-6xl">
                {teamMembers.map((team, index) =>
                    <div className={`${index > 2 ? "hidden sm:block " : "block"}`} key={index}>
                        <TeamCard key={index} {...team} />
                    </div>

                )}
                <Link href={"/Team"} className='text-center py-8 mt-4 md:hidden ' >
                    <button className='border border-gray-800 py-2 px-6 rounded-md text-sm sm:text-md font-bold transition-transform hover:scale-95 '>View All</button>
                </Link>
            </div>
        </div>

    )
}