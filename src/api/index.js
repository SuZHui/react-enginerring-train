import Axios from "axios";
import { Modal } from "antd";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";

let modal;

const client = Axios.create({});
client.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (Axios.isCancel(err)) {
      // eslint-disable-next-line no-console
      console.info("Request canceled", err);
    } else if (!modal) {
      // 系统级错误 弹窗提示
      const message = (() => {
        let t = "Request failed";
        if (err.response && err.response.data) {
          t = err.response.data.message || t;
        } else if (err.message) {
          t = err.message;
        }
        return t;
      })();
      modal = Modal.error({
        title: "Error",
        content: message,
        afterClose: () => {
          modal = null;
        },
      });
    }
    return Promise.reject(err);
  }
);

export default {
  getList(t) {
    const fetcher = (url) => client.get(url);
    const type = t.toLowerCase() !== "all" ? `+language:${t}` : "";
    const getKey = (index) =>
      `https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&per_page=30&page=${
        index + 1
      }`;
    return useSWRInfinite(getKey, fetcher, {
      shouldRetryOnError: false,
      revalidateFirstPage: false,
    });
  },
  getUser(name) {
    return client.get(`https://api.github.com/users/${name}`);
  },
  getUser2(name) {
    const key = name ? `https://api.github.com/users/${name}` : null;
    const fetcher = (url) => client.get(url);
    return useSWR(key, fetcher, {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    });
  },
};
