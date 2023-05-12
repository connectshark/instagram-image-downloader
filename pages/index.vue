<template>
  <NuxtLayout>
    <section class="text-center lg:text-left py-20 w-11/12 mx-auto max-w-4xl">
      <h1 class="text-5xl/tight font-bold bg-clip-text from-[#063f66] to-[#0e8fe6] bg-gradient-to-br text-transparent">IG DOWNLOADER</h1>
      <p class="text-xl">最簡單Instagram圖片下載工具</p>
      <div class="pt-20 space-x-10">
        <a class="text-sm hover:underline" href="#steps">如何使用</a>
        <NuxtLink class="bg-primary text-white inline-block p-3 text-sm rounded-full hover:bg-transparent hover:text-primary border border-primary transition-colors" to="/photo">馬上開始<i class='bx bxs-chevron-right'></i></NuxtLink>
      </div>
    </section>
    <section class="text-center py-40 bg-[url('../../assets/svg/blob-scene-haikei.svg')] bg-cover bg-center">
      <div class=" w-11/12 mx-auto max-w-4xl">

        <h2 id="steps">簡單步驟下載Instagram影音</h2>
        <ul>
          <li>
            <div>
              <h3>複製貼文連結</h3>
            </div>
            
          </li>
          <li>
            <h3>貼進頁面輸入框中</h3>
          </li>
          <li>
            <h3>點擊送出</h3>
          </li>
          <li>
            <h3>選擇畫質並下載</h3>
          </li>
        </ul>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
</script>
