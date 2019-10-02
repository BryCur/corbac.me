<template>
  <section>
    <h1>Bryan Curchod</h1>
    <h2>CH - 16/05/1996</h2>
    <div>
      <p>Phone number: {{phone}}</p>
      <p>
        email:
        <a v-bind:href="'mailto:' + mail">{{mail}}</a>
      </p>
      <p>
        Social Media:
        <span v-for="(val, key) in socialMedia">
          <a v-bind:href="val[1]" rel="noopener noreferrer" target="_blank">{{val[0]}}</a>,
        </span>
      </p>
    </div>

    <div v-if="notice" class="warning">
      <b>{{notice}}</b>
    </div>

    <div>
      <h3>Who Am I?</h3>
      <p>{{biography}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phone: "(+41) 077 413 12 76",
      mail: "bryan.curchod@gmail.com",
      socialMedia: {
        Twitter: ["@BryDuCorbeau", "https://twitter.com/BryDuCorbeau"],
        LinkedIn: [
          "Bryan Curchod",
          "https://www.linkedin.com/in/bryan-curchod-062091bb/"
        ],
        GitHub: ["BryCur", "https://github.com/BryCur"]
      },
      notice: "",
      biography:
        "Young adult, living in switzerland, passionated in technology, graphism and more importantly in video games. I dream to work in the video game field and getting to live off this activity."
    };
  }
};
</script>


<style>
</style>
