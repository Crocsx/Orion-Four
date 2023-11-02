<script lang="ts">
  export let flip = true;
  export let color = '#2d3a69';

  $: cssVarStyles = `--color:${color};--border-svg:url("${`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:${encodeURIComponent(
    color
  )}%3B' /%3E%3C/svg%3E`}");`;
</script>

<div style={cssVarStyles} class="diagonal relative py-6 mt-6 md:my-16 {flip ? '' : 'flip'}">
  <slot />
</div>

<style lang="scss">
  .diagonal {
    background-color: var(--color, lightgray);
  }

  .diagonal::before,
  .diagonal::after {
    background-image: var(--border-svg, lightgray);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: '';
    display: block;
    height: 6.5em;
    position: absolute;
    width: 100%;
  }

  .diagonal::before {
    left: 0;
    top: -6.4em;
  }

  .diagonal::after {
    -moz-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    transform: scaleY(-1);
    bottom: -6.4em;
    left: 0;
  }

  .diagonal.flip::before {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .diagonal.flip::after {
    -moz-transform: scaleY(-1) scaleX(-1);
    -webkit-transform: scaleY(-1) scaleX(-1);
    -ms-transform: scaleY(-1) scaleX(-1);
    transform: scaleY(-1) scaleX(-1);
  }

  @media screen and (max-width: 768px) {
    .diagonal::before,
    .diagonal::after {
      height: 2.5em;
    }

    .diagonal::before {
      top: -2.4em;
    }

    .diagonal::after {
      bottom: -2.4em;
      left: 0;
    }
  }
</style>
