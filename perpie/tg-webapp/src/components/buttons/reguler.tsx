import { ChildrenProvider } from "../wrappers/children";
import { BaseComponentProps, TextProps } from "../wrappers/types";

export function Button({
  children,
  style,
  onClick,
  className = "",
  disabled = false,
  textProps = { fontColor: "text-custom-bg" },
}: BaseComponentProps & { textProps?: TextProps; disabled?: boolean }) {
  return (
    <div
      className={
        "bg-custom-textColor px-6 py-4 rounded-reguler flex flex-row items-center justify-center cursor-pointer transition-all duration-200 " +
        " " +
        (disabled
          ? "cursor-default"
          : "cursor-pointer hover:bg-opacity-80 active:scale-[0.98]") +
        " " +
        className
      }
      onClick={onClick}
      style={style}
    >
      <ChildrenProvider textProps={textProps}>{children}</ChildrenProvider>
    </div>
  );
}
