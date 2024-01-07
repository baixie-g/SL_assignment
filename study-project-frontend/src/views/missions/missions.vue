<template>
  <div class="missions-container">
    <h1>Missions</h1>

    <div class="map">
      <div v-for="mission in missions" :key="mission.id" class="mission-item" @click="showMissionDetails(mission)">
        <mission :data="mission"></mission>
      </div>
    </div>

    <mission-details v-if="selectedMission" :data="selectedMission" @close="closeMissionDetails" />
  </div>
</template>

<script>
import Mission from './components/Mission.vue';
import MissionDetails from './components/MissionDetails.vue';
import { fetchMissions } from '@/store/modules/missionsData';

export default {
  data() {
    return {
      missions: [],
      selectedMission: null,
    };
  },
  components: {
    Mission,
    MissionDetails,
  },
  mounted() {
    this.loadMissions();
  },
  methods: {
    async loadMissions() {
      try {
        this.missions = await fetchMissions();
      } catch (error) {
        console.error('Error loading missions', error);
        this.missions = [{ id: 1, name: 'Error loading missions' }];
      }
    },
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
.missions-container {
  max-width: 800px;
  margin: 0 auto;
}

.map {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.mission-item {
  flex: 0 0 calc(33.3333% - 20px);
  margin: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.remaining-time {
  font-weight: bold;
  color: #ff5733; /* Adjust the color as needed */
}
/* Add more styling as needed */
</style>
