<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="../favicon.ico" alt="Vue Logo" class="navbar-brand" style="max-width: 30px; margin-right: 10px;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">Test</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">  <!-- Search form -->
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

      <div class="row">
        <aside class="col-md-3 bg-dark text-light sidebar">
          <h3><router-link to="/" class="text-warning">Assassin's Creed Series</router-link></h3>
          <ul class="list-group">
            <li class="list-group-item bg-dark">
              <router-link to="/ac1" class="text-light">assassins creed 1</router-link>
            </li>
            <li class="list-group-item bg-dark">
              <router-link to="/ac2" class="text-light">assassins creed 2</router-link>
            </li>
            <li class="list-group-item bg-dark">
              <router-link to="/brotherhood" class="text-light">assassins creed brotherhood</router-link>
            </li>
            <li class="list-group-item bg-dark">
              <router-link to="/revelations" class="text-light">assassins creed revelations</router-link>
            </li>
          </ul>
        </aside>
        <main class="col-md-9">
          <router-view />
        </main>
      </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.sidebar {
  padding: 1rem;
  height: 100vh;
  overflow-y: auto;
}
</style>