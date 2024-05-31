import moment from "moment";

export const TimeStamp = ({ timestamp }) => {
  const timeAgo = moment(timestamp).fromNow();
  return timeAgo;
};

// Usage example:
// const ans = TimeAgo({ timestamp: "2024-05-26T15:00:00Z" });
// console.log(ans);
