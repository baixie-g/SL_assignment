<template>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>任务列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <el-table :data="taskList" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="80"></el-table-column>
            <el-table-column prop="name" label="任务名称"></el-table-column>
            <el-table-column prop="status" label="状态">
              <template v-slot="scope">
                <el-tag :type="scope.row.status === 'completed' ? 'success' : 'info'">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="deadline" label="截止日期" width="180">
              <template v-slot="scope">
                {{ scope.row.deadline | formatDate }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
    };
  },
  created() {
    this.generateTaskList();
  },
  methods: {
    generateTaskList() {
      // 模拟随机生成任务数据
      for (let i = 1; i <= 10; i++) {
        this.taskList.push({
          id: i,
          name: `任务 ${i}`,
          status: Math.random() > 0.5 ? 'completed' : 'pending',
          deadline: this.generateRandomDate(),
        });
      }
    },
    generateRandomDate() {
      const currentDate = new Date();
      const randomDays = Math.floor(Math.random() * 10) + 1;
      const deadline = new Date(currentDate);
      deadline.setDate(currentDate.getDate() + randomDays);
      return deadline.toISOString().split('T')[0];
    },
  },
  filters: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
.box-card {
  margin-top: 10px;
}
</style>
