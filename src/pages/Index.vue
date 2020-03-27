<template>
  <Layout>
    <div class="container-fluid p-0">
      <Services/>
      <hr class="m-0">
      <Experience/>
      <hr class="m-0">
      <Projects/>
      <hr class="m-0">
      <Skills/>
    </div>
  </Layout>
</template>

<script>
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default {
  components: {
    Services,
    Experience,
    Projects,
    Skills
  },
  metaInfo: {
    title: "&lt;apaz074/&gt;",
    titleTemplate: "%s - Desarrollo web con ingenio"
  }
};
</script>

<style lang="scss">
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: Roboto, "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}

.fa-ul > li {
  display: flex;
  align-items: center;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
  color: var(--primary);
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
