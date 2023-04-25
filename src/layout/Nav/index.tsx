import MyButton from "../../components/MyButton";
import UserIcon from "../../components/UserIcon";

function Nav() {
  return (
    <>
      <UserIcon className="w-1/3" size={"h-10 w-10"}  status="active"/>
      <div className="flex flex-col justify-center flex-grow">
        <MyButton theme="primary" className="w-1/3" label={"abc"} />
        <MyButton theme="primary" className="w-1/3" label={"abc"} />
        <MyButton theme="primary" className="w-1/3" label={"abc"} />
        <MyButton theme="primary" className="w-1/3" label={"abc"} />
      </div>
      <MyButton theme="primary" className="w-1/3" label={"abc"} />
    </>
  );
}

export default Nav;
