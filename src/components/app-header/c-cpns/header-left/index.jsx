import React, { memo } from "react";
import IconLogo from "@/assets/svg/icon_logo";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="iconLogo">
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
