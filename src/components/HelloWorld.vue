<template>
    <div id="main_canvas_container"></div>
</template>

<script>

// import b4w from 'blend4web';
import * as main_canvas_container from 'blend4web/projects/my_project/my_project.js';

  export default {
    name: 'HelloWorld',
    components: {
    },
    data: () => ({
      main_canvas_container,
    }),
  }
</script>
<style>
#main_canvas_container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
</style>
