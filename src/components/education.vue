<template>
  <section class="education-container">
    <div v-for="educ of list">
      <h3>{{educ.name}}</h3>
      <p>{{educ.location}}</p>
      <p>{{educ.comment}}</p>
      <p>{{educ.thesis}}</p>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      list: [
        {
          name:
            "EPTs - Ecole professionnelle technique de Sion (Sion's technical school",
          paper: "Computer Scientist Licence",
          Location: "Sion, VS, CH",
          imageURL: "",
          comment:
            "During my apprenticeship I learned the fundamentals of the computer field (i.e. Software development, Web development and system/network management. During 3 internship (at Axianet llc, and the Sierre's Comunal Adminstration) in the 2 last years I gained in experience mostly in the IT support field, but in the process of building websites, and android applications. These experiences allowed me to have contact with customer and use graphical tool similar to Photohop.",
          thesis:
            'My licence thesis consisted of a "silent alarm system" aimed for the people in charge of the various counters in the local police department and healthcare center. If a "customer" comes a cause trouble, the people behind the desk had the possibility to amit an alarm directly to the police offices. This was developped with the WinDev technologies.'
        },
        {
          name:
            "HEIG-VD - Haute Ecole d'Ingénierie et de Gestion du canton de Vaud (Ingeneering and Management school)",
          paper: "Bachelor's Degree in Software Ingeneering",
          Location: "Yverdon-les-Bains, VD, CH",
          imageURL: "",
          comment:
            "The formation for the Software Engineering tought me how to think, build and maintain different software structure (Multi-tier programming, MVC model, POO concepts, REST architecures, etc.). I discovered many tools and technology (JavaFX, JavaEE, Nest.JS, Angular, Vue, Electron, ...), and learned the basics of the programmation in many languages (Java, JavaEE, Javascript, python, C/C++). Through the many practical works done, I learned the workflow of the enterprise field and the tools (Git, Agile development) and how to work in a team.",
          thesis:
            "For my Bachelor's Thesis, I worked in collaboration with the Acharya Nagarjuna University (ANU) and the Ramesh Hospital in India. The goal is to produce a proof of concept for the project of Health Surveillance And Recording System. The project aimed to allow a doctor to monitor the state of a patient without having to book an appointment. The patient's phone would send the data monitored from a wearable sensor directly to the doctor's office, where the caretaker is able to see the evolution of the patient. I was in charge of the server and descktop application for the Doctor, and worked with Nest.js and Electron to achieve my task."
        }
      ]
    };
  },
  methods: {}
};
</script>


<style>
</style>
