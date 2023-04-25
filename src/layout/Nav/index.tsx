import MyButton from "../../components/MyButton";
import UserIcon from "../../components/UserIcon";
import { RiMessage3Line } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { HiBellAlert } from "react-icons/hi2";
import { MdContacts } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

;
function Nav() {
  return (
    <>
      <UserIcon className="w-1/3" size={"h-10 w-10"} status="active" />
      <div className="flex flex-col justify-evenly flex-grow py-24">
        <MyButton theme="primary" label={<HiBellAlert size={"2em"} />} />
        <MyButton theme="primary" label={<RiMessage3Line size={"2em"} />} />
        <MyButton theme="primary" label={<TiGroup size={"2em"} />} />
        <MyButton theme="primary" label={<MdContacts size={"2em"} />} />
        <MyButton theme="primary" label={<BsThreeDots size={"2em"} />} />
      </div>
      <MyButton theme="primary" label={<AiOutlineSetting size={"2em"} />} />
    </>
  );
}

export default Nav;
