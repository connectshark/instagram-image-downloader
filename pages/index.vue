<template>
  <NuxtLayout>
    <section class="text-center lg:text-left pt-20 pb-10 w-11/12 mx-auto max-w-6xl lg:grid lg:grid-cols-5">
      <div class=" col-start-1 col-span-3 row-start-1 self-center">
        <h1 class=" text-5xl/tight lg:text-6xl/tight font-bold">IG <span class=" bg-clip-text text-transparent to-primary from-accent bg-gradient-to-br">DOWNLOADER</span></h1>
        <p class="text-xl">最簡單Instagram圖片下載工具</p>
        <div class="pt-20 space-x-10">
          <a class="text-sm hover:underline" href="#steps">如何使用</a>
          <NuxtLink class="bg-primary text-white inline-block p-3 text-sm rounded-full hover:bg-transparent hover:text-primary border border-primary transition-colors" to="/photo">馬上開始<i class='bx bxs-chevron-right'></i></NuxtLink>
        </div>
      </div>
      <div class="bg-[url('../../assets/svg/Focus-rafiki.svg')] bg-contain bg-no-repeat bg-center col-start-3 col-span-3 row-start-1 h-[35rem]"></div>
    </section>
    <section>
      <div class="w-11/12 mx-auto max-w-6xl">
        <h2 id="steps" class="text-center text-2xl font-bold mb-20">專門Instagram圖片下載</h2>
        <ul>
          <li class="bg-[url('../../assets/svg/blob.svg')] bg-no-repeat bg-cover bg-center max-w-lg">
            <h3 class=" text-2xl text-center leading-[20rem]">公開帳戶圖片下載</h3>
          </li>
          <li class="bg-[url('../../assets/svg/blob-2.svg')] bg-no-repeat bg-cover bg-center max-w-lg ml-auto">
            <h3 class=" text-2xl text-center leading-[20rem]">私人圖片下載</h3>
          </li>
        </ul>
      </div>
    </section>
    <div class="bg-[url('../../assets/svg/wave.svg')] bg-no-repeat bg-cover bg-center py-20"></div>
    <section class="py-20 bg-secondary">
      <div class="w-11/12 mx-auto max-w-6xl">
        <h2 id="steps" class="text-center text-2xl font-bold mb-20">簡單步驟下載Instagram影音</h2>
        <ul class="max-w-lg mx-auto">
          <li v-for="item in steps" :key="item.icon" class="flex items-center gap-8 mb-8 lg:even:flex-row-reverse lg:mb-40">
            <div class="bg-secondary p-8 rounded-3xl text-center">
              <i class='bx bx-lg' :class="item.icon"></i>
            </div>
            <div>
              <h3 class="text-xl mb-2 lg:mb-6">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="bg-[url('../../assets/svg/wave-reverse.svg')] bg-no-repeat bg-cover bg-center py-20"></div>
    <section class="py-20">
      <div class="w-11/12 mx-auto max-w-6xl">
        <h2 id="steps" class="text-center text-2xl font-bold mb-20">嘗試一下</h2>
        <div class="pt-20 space-x-10 text-center">
          <NuxtLink class="bg-primary text-white inline-block p-3 text-sm rounded-full hover:bg-transparent hover:text-primary border border-primary transition-colors" to="/photo">馬上開始<i class='bx bxs-chevron-right'></i></NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const steps = [
  {
    title: '複製',
    description: '從PC版或手機上複製貼文的連結',
    icon: 'bx-copy-alt'
  },
  {
    title: '貼上',
    description: '將複製的連結貼進輸入框中',
    icon: 'bx-paste'
  },
  {
    title: '送出',
    description: '點擊送出按鈕並且稍待片刻',
    icon: 'bx-mail-send'
  },
  {
    title: '下載',
    description: '選擇要下載的畫質點選連結另開分頁後長按下載',
    icon: 'bx-download'
  }
]
</script>
