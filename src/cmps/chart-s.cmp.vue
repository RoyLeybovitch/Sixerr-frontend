<template>
  <div id="app-chart" style="width: 290px">
    <!-- <button @click="shuffleData">Shuffle</button> -->
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<script>
import { ref, onMounted, computed, defineComponent } from 'vue'
import { Chart, registerables } from 'chart.js';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
// import { ref, computed,  } from '@vue/composition-api';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    DoughnutChart,
  },
  setup() {
    const data = ref([60, 20, 18, 2]);

    const chartData = computed(() => ({
      labels: ['Excellent', 'Very Good', 'Good', 'Improvement required'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return { shuffleData, doughnutChartProps, doughnutChartRef };
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