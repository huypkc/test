
interface UserIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: string;
  status: "active" | "disable" | "busy";
  onClick?: () => void;
}

const StatusSheet = new Map([
  ["active", "bg-green-500"],
  ["disable", "bg-gray-500"],
  ["busy", "bg-orange-400"],
]);

const UserIcon = (props: UserIconProps) => {
  return (
    <div className={`${props.size} relative `}>
      <div className="w-1/4 h-1/4 bg-white absolute top-1/6 left-1/6  rounded-full flex justify-center items-center">
        <div
          className={`w-2/3 h-2/3  absolute rounded-full  ${StatusSheet.get(
            props.status
          )}`}
        ></div>
      </div>
      <img
        className={`${props.size}  object-cover rounded-full  z-50`}
        src="https://i.pinimg.com/564x/a0/1f/88/a01f886a70f6127abc53c901fc62766e.jpg"
        alt=""
      />
    </div>
  );
};

export default UserIcon;

// w-${props.size} h-${props.size}
//  size?: "size-10" | "size-16" | "size-24" | "size-36" | "size-40";
 