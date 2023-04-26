interface MessageProps {
  id: string;
  text: string;
  time: string;
}
const Message = ({ id, text, time }: MessageProps) => {
  const isId1 = id === "1";

  return (
    <div className={`flex mb-4 space-y-3 ${isId1 && "justify-end"}`}>
      <div className=" ">
        <p
          className={`flex  border-2 py-2 px-4 rounded-t-xl shadow-lg  max-w-2/3 whitespace-pre-wrap  ${
            isId1
              ? "justify-end rounded-bl-xl "
              : "rounded-br-xl bg-blue-500 text-white "
          }`}
        >
          {text}
        </p>
        <p className={`flex text-gray-500 text-xs ${isId1 && "justify-end"}`}>
          {time}
        </p>
      </div>
    </div>
  );
};

export default Message;
