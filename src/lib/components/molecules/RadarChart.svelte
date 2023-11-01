<script lang="ts">
  import { onMount } from 'svelte';

  import type { RadarChartOptions } from '$lib/libs/radarChart';
  import { RadarChart } from '$lib/libs/radarChart';
  import { SKILLS } from '$lib/constants/skill';
  import { Skill } from '$lib/models/skill';

  let canvas: HTMLCanvasElement;
  let chartRef: RadarChart;
  onMount(async () => {
    const radarData: RadarChartOptions = {
      labels: [],
      precision: 5,
      maxValue: 100,
      structureColor: '#4c5c96',
      webColor: '#fff',
      canvas: canvas,
      datasets: [
        {
          label: 'DataSet',
          fillColor: '#4c5c9699',
          strokeColor: '#3f4e85',
          pointFillColor: '#4c5c96',
          pointStrokeColor: '#4c5c96',
          data: [50, 90, 75, 90, 60, 80, 80, 65, 45, 35],
        },
      ],
    };

    const labels = [
      SKILLS.ICONS[Skill.C_SHARP],
      SKILLS.ICONS[Skill.TYPESCRIPT],
      SKILLS.ICONS[Skill.CSS_3],
      SKILLS.ICONS[Skill.JAVASCRIPT],
      SKILLS.ICONS[Skill.NODE_JS],
      SKILLS.ICONS[Skill.ANGULAR],
      SKILLS.ICONS[Skill.REACT],
      SKILLS.ICONS[Skill.UNITY],
      SKILLS.ICONS[Skill.UNREAL],
      SKILLS.ICONS[Skill.C_PLUS_PLUS],
    ];
    labels.forEach((label) => {
      var img = new Image();
      img.src = label;
      radarData.labels.push(img);
    });
    chartRef = new RadarChart(radarData);
  });
</script>

<canvas bind:this={canvas} />
