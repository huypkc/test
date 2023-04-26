import Header from "./Header";

const MessBox = () => {
  return (
    <div className="flex flex-col h-full empty:hidden">
      <Header/>
      <div className=" h-full bg-slate-500">mess</div>
    </div>
  );
}

export default MessBox