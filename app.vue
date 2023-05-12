<template>
<div class="bg-cream font-nunito text-gray-900">
  <header>
    <div class="w-11/12 mx-auto max-w-4xl py-6">
      <h2 class=" text-2xl">
        <NuxtLink to="/">{{ appConfig.APP_NAME }}</NuxtLink>
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
  color: #3b1e79;
}
</style>