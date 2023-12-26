<!-- missions.vue -->

<template>
  <div>
    <h1>Missions</h1>
    <div class="map">
      <!-- 绘制xy坐标系 -->
      <div class="coordinate-axis">
        <!-- y轴坐标，代表紧急性 -->
        <div class="y-axis">
          <div class="coordinate-label">High</div>
          <div class="coordinate-label">Medium</div>
          <div class="coordinate-label">Low</div>
        </div>

        <!-- x轴坐标，代表重要性 -->
        <div class="x-axis">
          <div class="coordinate-label">Low</div>
          <div class="coordinate-label">Medium</div>
          <div class="coordinate-label">High</div>
        </div>

        <!-- 显示子组件mission -->
        <div v-for="mission in missions" :key="mission.id" class="mission-item">
          <mission :data="mission" @click="showMissionDetails(mission)"></mission>
        </div>
      </div>
    </div>

    <!-- 显示选定任务的详细信息 -->
    <div v-if="selectedMission">
      <h2>Mission Details</h2>
      <mission-details :data="selectedMission" @close="closeMissionDetails"></mission-details>
    </div>
  </div>
</template>

<script>
import Mission from './components/mission.vue'; // 导入子组件
import MissionDetails from './components/mission-details.vue'; // 导入任务详细信息组件

export default {
  data() {
    return {
      missions: // missions 数据的具体样例
          [
            {
              id: 1,
              title: '完成项目A',
              description: '在下个月底之前完成项目A的所有任务',
              urgency: 'High',
              importance: 'High',
            },
            {
              id: 2,
              title: '学习新技能B',
              description: '每周至少投入5小时学习新技能B',
              urgency: 'Medium',
              importance: 'Medium',
            },
            {
              id: 3,
              title: '健身计划',
              description: '每周至少进行3次健身活动',
              urgency: 'Low',
              importance: 'High',
            },
            // 可以根据需要添加更多任务
          ]
      ,
      selectedMission: null,
    };
  },
  components: {
    Mission,
    MissionDetails,
  },
  methods: {
    showMissionDetails(mission) {
      this.selectedMission = mission;
    },
    closeMissionDetails() {
      this.selectedMission = null;
    },
  },
};
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.map{
  border-color: #1c84c6;
}
.coordinate-axis {
  position: relative;
}

.y-axis, .x-axis {
  position: absolute;
}

.y-axis {
  left: 0;
}

.x-axis {
  bottom: 0;
}

.coordinate-label {
  margin: 5px;
}

.mission-item {
  position: unset;
  border-color: #a6157d;
  color: #1ab394;
}
</style>
