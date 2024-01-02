import { post } from "../../net";

export function fetchRandomBackgroundx() {
    return new Promise((resolve, reject) => {
        post(
            "https://yuindex-server-974538-1256524210.ap-shanghai.run.tcloudbase.com/api/background/get/random",
            {},
            (data) => {
                if (data.code === 0) {
                    console.log("Fetch random background: " + data.data);
                    resolve(data.data);
                } else {
                    console.error("Failed to fetch random background1: " + data.message);
                    reject(data.message);
                }
            },
            (message) => {
                console.error("Failed to fetch random background2: " + message);
                reject(message);
            },
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Origin': 'http://yuindex.yupi.icu',
                    'Referer': 'http://yuindex.yupi.icu/',
                }
            }
        );
    });
}


import axios from 'axios';

export function fetchRandomBackground() {
    return new Promise((resolve, reject) => {
        // 定义 API 地址
        const apiUrl = 'https://yuindex-server-974538-1256524210.ap-shanghai.run.tcloudbase.com/api/background/get/random';

        // 发送 POST 请求
        axios.post(apiUrl)
            .then(response => {
                // 检查响应中是否有 data 字段
                if (response.data && response.data.data) {
                    // 返回 data 字符串值
                    resolve(response.data.data);
                } else {
                    // 如果响应中没有符合预期的数据，通过 Promise 的 reject 返回错误信息
                    reject(new Error('Invalid response format'));
                }
            })
            .catch(error => {
                // 捕获请求错误，并通过 Promise 的 reject 返回错误信息
                reject(error);
            });
    });
};
