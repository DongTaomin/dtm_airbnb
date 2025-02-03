import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "@/components/section-header";
import { Button } from "antd";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({ goodPriceInfo: state.home.goodPriceInfo }),
    shallowEqual
  );

  // 发送网络请求
  // 派发异步事件
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={goodPriceInfo.title}></SectionHeader>
        <SectionRooms
          roomList={goodPriceInfo.list}
          itemWidth="25%"
        ></SectionRooms>
        <Button>111</Button>
      </div>
    </HomeWrapper>
  );
});

export default Home;
