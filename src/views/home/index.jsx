import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import HomeSectionV1 from "./c-cpns/home-section-v1";
// import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
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
        <HomeSectionV1 infoData={discountInfo}></HomeSectionV1>
        <HomeSectionV2 infoData={highScoreInfo} />
        <HomeSectionV2 infoData={goodPriceInfo} />
        {/* <HomeSectionV2 infoData={goodPriceInfo} /> */}

        <Button>111</Button>
      </div>
    </HomeWrapper>
  );
});

export default Home;
