import { defineStore } from "pinia";
import { mainStore } from "../index.js";
import { fetchRandomBackground } from "./randomBg.js";
// @ts-ignore
export const useBackgroundStore =  defineStore('background',{
    state:()=>({
        backgroundImg:[
            {
                url:'https://img.btstu.cn/api/images/5e699639ba333.jpg',
                name:'随机'
            },
            {
                url:'https://www.freeimg.cn/i/2024/01/02/65940274ec9cd.jpg',
                name:'万叶'
            },
            {
                url:'https://www.freeimg.cn/i/2024/01/02/6594027aa54ba.png',
                name:'雷神'
            },
            {
                url:'https://www.freeimg.cn/i/2024/01/02/6593d082c6d9e.jpg',
                name:'瑞克'
            },
            {
                url:'https://www.freeimg.cn/i/2024/01/02/6594027a23f94.jpg',
                name:'钟离'
            },
            {
                url:'https://www.freeimg.cn/i/2024/01/02/6594027cd6871.png',
                name:'神里绫华'
            },
        ],
        ActiveImg:'https://www.freeimg.cn/i/2024/01/02/65940274ec9cd.jpg'
    }),
    actions:{
        changeActive(index:number){
            if(index == 0 && this.ActiveImg == this.backgroundImg[index].url){
                fetchRandomBackground()
                .then((url) => {
                    this.backgroundImg[index].url = url;
                    console.log("Random background fetched: " + url);
                })
                .catch((error) => {
                  console.error("Failed to fetch random background: " + error);
                  // Set a default image URL in case of error
                    this.backgroundImg[index].url =
                        "https://img.btstu.cn/api/images/5e699639ba333.jpg";
                });
            }
            this.ActiveImg = this.backgroundImg[index].url;
        }
    },
    persist: {
        storage: localStorage,
        paths:['backgroundImg']
    }
})
