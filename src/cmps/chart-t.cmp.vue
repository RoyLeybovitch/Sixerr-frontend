<template>
  <div id="app-chart" style="width: 270px">
    <!-- <button @click="shuffleData">Shuffle</button> -->
    <PieChart v-bind="pieChartProps" />
  </div>
</template>

<script>
import { ref, onMounted, computed, defineComponent } from 'vue'
import { Chart, registerables } from 'chart.js';
import { PieChart, usePieChart } from 'vue-chart-3';
// import { ref, computed,  } from '@vue/composition-api';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    PieChart,
  },
  setup() {
    const data = ref([100, 40, 5, 35]);

    const chartData = computed(() => ({
      labels: ['Views', 'Purchase', 'Pending', 'Send'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4'],
        },
      ],
    }));

    const { pieChartProps, pieChartRef } = usePieChart({
      chartData,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return { shuffleData, pieChartProps, pieChartRef };
  },
});
</script>

<style>
#app-chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>