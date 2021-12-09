<template>
  <section class="section">
    <div class="columns  is-centered is-mobile">
      <div class="animated">
        <div class="column">
          <a class="button" href="https://www.linkedin.com/in/ranggaad/">
            <div class="card-content"><span><fa-icon :icon="['fab', 'linkedin']" style="margin-right:10px" /></span>LinkedIn</div>
          </a>
          <a class="button" href="https://github.com/deneuv34">
            <div class="card-content"><span><fa-icon :icon="['fab', 'github']" style="margin-right:10px" /></span> GitHub</div>
          </a>
          <a class="button" href="https://instagram.com/deneuv34">
            <div class="card-content"><span><fa-icon :icon="['fab', 'instagram']" style="margin-right:10px" /></span> Instagram</div>
          </a>
          <a class="button" href="https://medium.com/@deneuv3.4">
            <div class="card-content"><span><fa-icon :icon="['fab', 'medium']" style="margin-right:10px" /></span> Medium</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style scoped>
.fade-in {
  height: 500px;
  margin-bottom: 50px;
  margin-bottom: 0px;
  opacity: 0;
  transition: 0.3s ease-in;
  transform: scale(0.8);
  box-sizing: border-box;
  padding: 20px;
  display: inline-block;
}
.card-content {
  font-size: 0.95em;
  font-weight: 400;
  font-family: 'Signika Negative';
}
.button {
  margin-bottom: 10px;
  width: 30ch
}
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}
</style>