import React, { memo, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import GithubLogo from "@/assets/svg/demo";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = memo(() => {
  const [show, setShow] = useState(false);
  function profileClickHandle() {
    setShow(!show);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <a
            href="https://github.com/DongTaomin"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo></GithubLogo>
          </a>
        </span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconProfileMenu />
        <IconProfileAvatar />

        <div className="panel" style={{ display: show ? "block" : "none" }}>
          <div className="top">
            <div className="register">注册</div>
            <div className="login">登录</div>
          </div>
          <div className="buttom">
            <div className="rent">出租房源</div>
            <div className="experience">开展体验</div>
            <div className="help">帮助</div>
          </div>
        </div>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
