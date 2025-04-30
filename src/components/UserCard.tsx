import Image from "next/image"

const UserCard = ({type}:{type:string}) => {

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;   
  return (
    <div className="rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">{formattedDate}</span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  )
}

export default UserCard
