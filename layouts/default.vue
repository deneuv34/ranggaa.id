<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="wrapper">
          <div class="typing-demo"> 
            Hello, I am Rangga :D
          </div>
        </div>
      </div>
      <Nuxt />
    </div>

    <footer class="footer">
      <div class="container is-centered">
        <div>
          <p>Made with <span><fa-icon :icon="['fas', 'heart']" style="color:red" /></span> and <span style="color:#4DE7A8">Nuxt</span> </p>
        </div>
      </div>
    </footer>
  </div>    
</template>

<script>
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  
  computed: {
    faGithub() {
      return faGithub
    },
    faHeart() {
      return faHeart
    },
    faLinkedin() {
      return faLinkedin
    }
  },
}
</script>

<style>
.wrapper {
  height: 25vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 20ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid;
  font-size: 2em;
  color: '#1a202c';
  font-family: 'Readex Pro';
  font-weight: 700;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}
footer {
  margin-top: auto;
  font-family: 'Readex Pro';
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

</style>
