import dtmrequest from "../index";

export function getHomeDiscountData() {
  return dtmrequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return dtmrequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeHighScoreData() {
  return dtmrequest.get({
    url: "/home/highscore",
  });
}

export function getHomeGoodPriceData() {
  return dtmrequest.get({
    url: "/home/goodprice",
  });
}

export function getHomePlusData() {
  return dtmrequest.get({
    url: "/home/plus",
  });
}

export function getHomeLongforData() {
  return dtmrequest.get({
    url: "/home/longfor",
  });
}
