<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="services">
    <div class="w-100">
      <h1 class="mb-0 lowercase">
        <span>&lt;apaz</span>
        <span class="text-primary">074/&gt;</span>
      </h1>
      <div class="subheading mb-2">Desarrollo web con ingenio</div>
      <div class="subheading mb-5">
        Tres Ríos · Cartago, Costa Rica · +506 8908-1606 ·
        <a
          class="lowercase"
          href="mailto:info@apaz074.com"
        >info@apaz074.com</a>
      </div>
      <h2 class="mb-5">Servicios</h2>
      <ul class="fa-ul lead mb-5">
        <li class="mb-3 aitems-normal">
          <font-awesome class="fa-li text-primary" :icon="['fas', 'file-code']"/>Desarrollo de landing page
          (sitio web de una página), website (sitio web) y
          webapp (aplicación web) con WordPress y/o JavaScript
        </li>
        <li class="mb-3 aitems-normal">
          <font-awesome class="fa-li text-primary" :icon="['fas', 'file-code']"/>Mantenimiento de landing page, website y webapp, especialmente con WordPress
        </li>
        <li class="mb-3 aitems-normal">
          <font-awesome class="fa-li text-primary" :icon="['fas', 'file-code']"/>Configuración de WordPress.
        </li>
      </ul>
      <!--<div class="social-icons">
        <a href="https://linkedin.com/in/lokecarlsson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/LokeCarlsson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://twitter.com/carlssonloke" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/carlssonloke" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>
        <a href="https://loke.dev" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fas', 'rss']"/>
        </a>
      </div>-->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.lowercase {
  text-transform: lowercase;
}
.aitems-normal {
  align-items: normal;
}
/*.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}*/
</style>
