<template>
<div class=" bg-background font-nunito text-text">
  <header>
    <div class="w-11/12 mx-auto max-w-6xl py-10">
      <h2>
        <NuxtLink class="text-3xl font-bold" to="/">{{ appConfig.APP_NAME }}</NuxtLink>
      </h2>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/private-instagram">私人下載</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <NuxtPage/>
  <footer class=" bg-gray-900 text-white">
    <div class="w-11/12 mx-auto max-w-4xl py-10">
      <h3>
        <NuxtLink to="/"><i class='bx bx-copyright'></i>{{ appConfig.APP_NAME }}</NuxtLink>
      </h3>
    </div>
  </footer>
</div>
</template>


<script setup>
const appConfig = useAppConfig()
</script>

<style>
.sdkf{
  color: #27426b;
}
</style>