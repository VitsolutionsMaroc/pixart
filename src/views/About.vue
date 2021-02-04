<template>
  <div>
    <div class="slide h-72 lg:h-screen flex justify-center items-center">
      <div class="textHeader text-white text-lg md:text-4xl lg:text-6xl text-center uppercase">
        <p>Une agence immobiliére</p>
        <p>qui aime son métier et ses</p>
        <p>clients</p>
      </div>
    </div>
    <!-- Vision section -->
    <div class="text-center py-4 px-4 md:px-32">
      <h2 class="text-xl md:text-4xl font-bold my-2">Our vision</h2>
      <p class="text-sm text-justify md:text-center">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don’t look
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
        sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
      </p>
    </div>
    <!-- Vision section -->
    <!-- Services -->
    <div class="services text-center p-16" style="background:#EFEAEA">
      <h2 class="text-xl md:text-4xl text-black my-2 font-bold">Our services for you</h2>
      <p class="text-lg my-8">
        Highlight the best of your properties by using the list category shortcake. You can list
        categories, types, cities, areas and states of your choice.
      </p>
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4 w-16 h-16 md:w-24 md:h-24" src="../assets/img/icon1.png" />
          <h3 class="m-auto text-xl font-bold text-black">
            Investment Consulting Development
          </h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4 w-16 h-16 md:w-24 md:h-24" src="../assets/img/icon2.png" />
          <h3 class="m-auto text-xl font-bold text-black">Relocation</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4 w-16 h-16 md:w-24 md:h-24" src="../assets/img/icon3.png" />
          <h3 class="m-auto text-xl font-bold text-black">Maison de vacance au soleil</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>
      </div>
    </div>
    <!-- Services -->
    <div class="grid md:grid-cols-2 gap-4 p-4">
      <div>
        <img src="../assets/img/welcome.jpg" />
      </div>
      <div class="p-12">
        <h2 class="text-xl md:text-2xl lg:text-4xl font-bold mb-4">PIXART REAL ESTAT</h2>
        <p class="text-base lg:text-lg">
          With Over $2 Billion In Sales, Sam Davis Is The Industry’s Top Luxury Producer With Over
          27 Years Of Experience In Marketing South Florida’s Most Prestigious Waterfront
          Properties. Due To His Unparalleled Results, Expertise And Dedication, Sam Ranks Amongst
          The Top 6 Agents In Florida And Is An Elite Member To Corcoran’s Presidents Council.
        </p>
        <button>Get Free evaluation</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slide {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("../assets/img/background2.jpg");
  background-size: cover;
}
@media (min-width: 1024px) {
  .textHeader {
    line-height: 6.5rem;
  }
}
</style>
