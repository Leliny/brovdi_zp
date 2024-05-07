<template>
  <div>
    <router-link to="/structure/tree/b-tree">
      <v-btn class="button2S" color="grey" dark>STUDY</v-btn>
    </router-link>

    <h2 class="theoryvideo">Video of B-Tree</h2>

    <iframe
        class="position1"
        width="560px"
        height="315px"
        :src="videoUrl1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
  </div>
  <div>
    <iframe
        class="position2"
        width="560px"
        height="315px"
        :src="videoUrl2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'StudyVideo',
  data() {
    return {
      videoUrl1: "https://www.youtube.com/embed/FgWbADOG44s?si=3ltjkT9bCuoMrFQD",
      videoUrl2: "https://www.youtube.com/embed/NI9wYuVIYcA?si=Iz9LTUTn5Lea3NY_"
    };
  }
};
</script>

<style scoped>

/* Зображення */
.theoryvideo {
  font-family: 'Inconsolata', monospace;
  margin-top: 1em;
  margin-right: -30em;
}

/* Кнопка */
.button2S {
  min-width: fit-content !important;
  max-height: 30px;
  margin-top: -1.2em;
  margin-right: -198.8em;
  border-radius: 30px;
}
.position1{
  margin-top: 3.5em;
  margin-right: -90em;
}
.position2{
  margin-top: 30em;
  margin-right: -90em;
}
</style>
