<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Habilidades</h2>

      <div class="subheading mb-3">Lenguajes de Programación &amp; Herramientas</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'html5']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'css3-alt']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'js-square']"/>
        </li>
        <!--<li class="list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']"/>
        </li>-->
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'node-js']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'sass']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'wordpress']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']"/>
        </li>
      </ul>

      <div class="subheading mb-3">Workflow &amp; Otros</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Mobile-First, Responsive Design
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Webpack
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Motores de plantillas - Pug
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Vue.js Framework - Vuepress
        </li>
      </ul>
    </div>
  </section>
</template>
