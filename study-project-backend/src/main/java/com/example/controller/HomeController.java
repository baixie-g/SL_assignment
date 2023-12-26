package com.example.controller;

import com.example.entity.RestBean;
import com.example.entity.segments.FeaturedItem;
import com.example.entity.user.AccountUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {

    @GetMapping("/featured-items")
    public RestBean<List<FeaturedItem>> getFeaturedItems() {
        // 模拟返回 featuredItems 数据
        List<FeaturedItem> featuredItems = new ArrayList<>();
        featuredItems.add(new FeaturedItem("精致时间管理", "掌握时间的艺术，提高效率，轻松完成任务。", "https://up.qqya.com/files/2020/20_1770.jpg", "时间管理"));
        featuredItems.add(new FeaturedItem("锻炼自律力", "培养坚定的决心，克服拖延，迈向成功的道路。", "https://up.qqya.com/files/2020/20_1775.jpg", "自律"));
        featuredItems.add(new FeaturedItem("智慧任务安排", "有效规划，合理安排，轻松迎接每一个挑战。", "https://up.qqya.com/files/2020/20_1771.jpg", "任务安排"));
        return RestBean.success(featuredItems);
    }
}
