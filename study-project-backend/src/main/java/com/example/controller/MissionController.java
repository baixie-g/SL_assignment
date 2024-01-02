package com.example.controller;

import com.example.entity.RestBean;
import com.example.entity.segments.FeaturedItem;
import com.example.entity.mission.Mission;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MissionController {

    @GetMapping("/missions")
    public RestBean<List<Mission>> getMissions() {
        // 模拟返回 missions 数据
        List<Mission> missions = new ArrayList<>();
        missions.add(new Mission(1, "完成项目A", "在下个月底之前完成项目A的所有任务", "High", "High"));
        missions.add(new Mission(2, "学习新技能B", "每周至少投入5小时学习新技能B", "Medium", "Medium"));
        missions.add(new Mission(3, "健身计划", "每周至少进行3次健身活动", "Low", "High"));
        return RestBean.success(missions);
    }
}
