<template>
  <div id="app">
    <div id="content">
    </div>

    <div id="footer">
      <div class="footer-content">
      </div>
      <div class="footer-bar">
        <p> Zucarelli & Pedrini, 2024</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  flex: 1;
}

#footer {
  background-color: #004d40; 
  color: white; 
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.footer-content {
}

.footer-bar {
  margin-top: auto; 
  background-color: #004d40; 
  color: white; 
  padding: 10px;
  text-align: center;
}
</style>
