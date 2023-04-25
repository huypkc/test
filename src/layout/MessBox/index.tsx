import UserIcon from "../../components/UserIcon";


const MessBox = () => {
  return (
    <div className="flex flex-col h-full empty:hidden">
      <div className="h-20 flex flex-row items-center px-5">
        <UserIcon size={"h-10 w-10"} status="disable" />
        head
      </div>
      <div className=" h-full bg-slate-500">mess</div>
    </div>
  );
}

export default MessBox