import ContactList from "./ContactList";
import MessBox from "./MessBox";
import Nav from "./Nav";
import Profile from "./Profile";

function Layout() {
  return (
    <div className="flex w-screen bg-slate-600 ">
      <div className="flex flex-col h-screen w-20 bg-slate-950 text-gray-300 items-center py-5">
        <Nav />
      </div>
      <div className="w-1/4 bg-gray-50 flex flex-col items-center py-5 border-r border-gray-100">
        <ContactList />
      </div>

      <div className="flex w-screen  ">
        <div className="bg-white flex-grow">
          <MessBox />
        </div>

        <div className="bg-gray-50 w-1/2 flex flex-col items-center py-10  border-l border-gray-100">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Layout;
