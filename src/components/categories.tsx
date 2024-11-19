import Image from "next/image";
export interface DesProp {
  image: string;
  title: string;
  availability: string
}

export default function CategoryCard(props: DesProp) {
  return (
    <div className="bg-gray flex flex-row gap-3 p-4 rounded-md ">
      <div className='border bg-white rounded-md p-4 text-2xl sm:text-xl flex justify-center items-center'>
        <Image src={props.image} alt={props.title} height={32} width={32} />
      </div>
      <div className="flex flex-col justify-center space-y-1 text-left">
        <h1 className="text-xl sm:text-2xl font-bold ">{props.title}</h1>
        <p className="text-sm ">{props.availability}</p>
      </div>
    </div>
  )
}
