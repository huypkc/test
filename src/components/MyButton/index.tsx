interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: React.ReactNode;
  theme: "primary" | "secondary";
}

function MyButton(props: ButtonProps) {
  return <button>{props.label}</button>;
}
// function MyButton(props: ButtonProps) {
//   return (
//     <button
//       className={
//         `text-${props.test} ${StyleSheet.get(props.theme)}`
//       }
//     >
//       {props.label}
//     </button>
//   );
// }

// const StyleSheet = new Map([
//   ["primary", "bg-black"],
//   ["secondary", "bg-blue-500"],
// ]);

//    <MyButton
//      className=""
//      label={"dấddsdsdas"}
//      test="3xl text-blue-500"
//      theme="secondary"
//    />;

export default MyButton;
