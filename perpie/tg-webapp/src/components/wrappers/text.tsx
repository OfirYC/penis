import { forwardRef } from "react";
import { TextSkeleton } from "./skeleton";
import { TextProps, Selection } from "./types";
/**
 * @notice
 * Wrapper image component,
 * for ease of use with skeletons and global styling
 */

("font-bold");
("font-black");
("font-bold");

const WrappedText = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      fontSize = 14,
      fontStyle = "reguler",
      fontFamily = "",
      fontColor,
      onClick,
      select = Selection.allow,
      truncate = "",
      contentEditable = "false",
      className = "",
      id,
      style,
      onInput,
      ...props
    }: TextProps,
    ref
  ) => {
    if (children === undefined) {
      return <TextSkeleton fontSize={fontSize} className={className} />;
    }

    return (
      <div
        ref={ref}
        className={`${
          "text-" +
          `[${fontSize.toString()}px]` +
          " font-" +
          fontFamily +
          " font-" +
          fontStyle +
          " text-" +
          (fontColor || "custom-textColor") +
          " " +
          "select-none focus:outline-none whitespace-nowrap " +
          truncate +
          " " +
          className
        }`}
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          onClick ? onClick(e) : null
        }
        contentEditable={contentEditable}
        suppressContentEditableWarning
        id={id}
        onInput={(e) => onInput && onInput(e)}
        style={style || {}}
        {...props}
      >
        {children}
      </div>
    );
  }
);

WrappedText.displayName = "WrappedText";

export default WrappedText;

("text-[1px]");
("text-[2px]");
("text-[3px]");
("text-[4px]");
("text-[5px]");
("text-[6px]");
("text-[7px]");
("text-[8px]");
("text-[9px]");
("text-[10px]");
("text-[11px]");
("text-[12px]");
("text-[13px]");
("text-[14px]");
("text-[15px]");
("text-[16px]");
("text-[17px]");
("text-[18px]");
("text-[19px]");
("text-[20px]");
("text-[21px]");
("text-[22px]");
("text-[23px]");
("text-[24px]");
("text-[25px]");
("text-[26px]");
("text-[27px]");
("text-[28px]");
("text-[29px]");
("text-[30px]");
("text-[31px]");
("text-[32px]");
("text-[33px]");
("text-[34px]");
("text-[35px]");
("text-[36px]");
("text-[37px]");
("text-[38px]");
("text-[39px]");
("text-[40px]");
("text-[41px]");
("text-[42px]");
("text-[43px]");
("text-[44px]");
("text-[45px]");
("text-[46px]");
("text-[47px]");
("text-[48px]");
("text-[49px]");
("text-[50px]");
("text-[51px]");
("text-[52px]");
("text-[53px]");
("text-[54px]");
("text-[55px]");
("text-[56px]");
("text-[57px]");
("text-[58px]");
("text-[59px]");
("text-[60px]");
("text-[61px]");
("text-[62px]");
("text-[63px]");
("text-[64px]");
("text-[65px]");
("text-[66px]");
("text-[67px]");
("text-[68px]");
("text-[69px]");
("text-[70px]");
("text-[71px]");
("text-[72px]");
("text-[73px]");
("text-[74px]");
("text-[75px]");
("text-[76px]");
("text-[77px]");
("text-[78px]");
("text-[79px]");
("text-[80px]");
("text-[81px]");
("text-[82px]");
("text-[83px]");
("text-[84px]");
("text-[85px]");
("text-[86px]");
("text-[87px]");
("text-[88px]");
("text-[89px]");
("text-[90px]");
("text-[91px]");
("text-[92px]");
("text-[93px]");
("text-[94px]");
("text-[95px]");
("text-[96px]");
("text-[97px]");
("text-[98px]");
("text-[99px]");
("text-[100px]");
("text-[101px]");
("text-[102px]");
("text-[103px]");
("text-[104px]");
("text-[105px]");
("text-[106px]");
("text-[107px]");
("text-[108px]");
("text-[109px]");
("text-[110px]");
("text-[111px]");
("text-[112px]");
("text-[113px]");
("text-[114px]");
("text-[115px]");
("text-[116px]");
("text-[117px]");
("text-[118px]");
("text-[119px]");
("text-[120px]");
