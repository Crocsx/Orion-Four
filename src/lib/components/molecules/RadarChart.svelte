<script lang="ts">
  import { onMount } from 'svelte';

  import { SKILL_ICONS } from '$lib/constants/skill';
  import { type RadarChartOptions, RadarChart } from '$lib/external/radarChart';
  import { Skill } from '$lib/models/skill';

  let canvas: HTMLCanvasElement;
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
      SKILL_ICONS[Skill.C_SHARP],
      SKILL_ICONS[Skill.TYPESCRIPT],
      SKILL_ICONS[Skill.CSS_3],
      SKILL_ICONS[Skill.JAVASCRIPT],
      SKILL_ICONS[Skill.NODE_JS],
      SKILL_ICONS[Skill.ANGULAR],
      SKILL_ICONS[Skill.REACT],
      SKILL_ICONS[Skill.UNITY],
      SKILL_ICONS[Skill.UNREAL],
      SKILL_ICONS[Skill.C_PLUS_PLUS],
    ];
    labels.forEach((label) => {
      var img = new Image();
      img.src = label;
      radarData.labels.push(img);
    });
    new RadarChart(radarData);
  });
</script>

<canvas bind:this={canvas} />
