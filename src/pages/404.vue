<template>
  <Layout>
    <div class="center">
      <h1>4<span class="text-primary">&lt;/&gt;</span>4</h1>
      <pre class="vw-100 language-javascript">
        <code class="vw-100 language-javascript">
const message = document.getElementById("message"),
  renderMessage = (error) => { 
    const error404 = document.createElement("div")
    error404.textContent = error

    return (id) => id.insertAdjacentElement("afterbegin", error404)
  }

renderMessage("Página no encontrada")(message)
        </code>
      </pre>

      <g-link class="d-block d-lg-none btn btn-success" to="/">
        Haceme click volver al inicio...
     </g-link>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
img {
  width: 80%;
  margin: auto;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.vw-100 {
  width: 100vw;
}
</style>
