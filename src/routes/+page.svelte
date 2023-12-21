<script lang="ts">
  import ResumeButton from '$lib/components/atoms/ResumeButton.svelte';
  import About from '$lib/components/organisms/About.svelte';
  import Banner from '$lib/components/organisms/Banner.svelte';
  import ProjectsList from '$lib/components/organisms/ProjectsList.svelte';
</script>

<section>
  <div id="#home" />
  <Banner />
  <div id="#project" />
  <ProjectsList />
  <div id="#about" />
  <About />
  <ResumeButton />
</section>
