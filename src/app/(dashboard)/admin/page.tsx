import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
      {/* USER CARD */}
     <div className="flex gap-4 justify-between flex-wrap">
     <UserCard type="student"/>
      <UserCard type="teacher"/>
      <UserCard type="staff"/>
      <UserCard type="Buses"/>
     </div>
     {/* Middle Charts */}
     <div className="flex gap-4 flex-col lg:flex-row">
      {/* Count Chart */}
      <div className="w-full lg:w-1/3 h-[450px]">
      <CountChart />
      </div>
      {/* Attendance Chart */}
      <div className="w-full lg:w-2/3 h-[450px]">
      <AttendanceChart />
      </div>
     
     </div>

      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      </div>
    </div>
  )
}

export default AdminPage;
