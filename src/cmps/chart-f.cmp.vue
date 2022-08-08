<template>
  <div id="app-chart" style="width: 300px">
    <!-- <button @click="shuffleData">Shuffle</button> -->
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script>
import { ref, onMounted, computed, defineComponent } from 'vue'
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
// import { ref, computed,  } from '@vue/composition-api';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 48, 25, 8, 4]);

    const chartData = computed(() => ({
      labels: ['Login', 'Show', 'Like', 'Purchase', 'Fulfilled'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return { shuffleData, barChartProps, barChartRef };
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