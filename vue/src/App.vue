<template>
  <div id="app">
    <div class="cmp">Subscription Timer Component</div>
    <SubscriptionTimer
      start-date-utc="2019-02-06T06:59Z"
      expiry-date-utc="2018-03-06T10:23Z"
      show-timer="true"
      before-expiry-label="Your Subscription expires in"
      after-expiry-label="Your Subscription Expired"
      after-expiry-additional-label="ago"
      day-label="day(s)"
      hour-label="hour(s)"
      min-label="min(s)"
      sec-label="sec(s)"
    ></SubscriptionTimer>
    <div class="cmp">Timeout component with no template.</div>
    <TimeOut :alert-inactivity-millis="5000" :post-inactivity-wait-till-millis="10000"></TimeOut>
  </div>
</template>

<script>
import SubscriptionTimer from "./components/subscriptiontimer.vue";
import TimeOut from "./components/timeout.vue";
export default {
  name: "app",
  components: {
    SubscriptionTimer,
    TimeOut
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.cmp {
  border: 1px solid grey;
  line-height: 30px;
  text-align: center;
}
</style>
