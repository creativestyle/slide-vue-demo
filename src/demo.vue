<template>
  <div class="demo">
    <h1 class="demo_main-title">Vue slider demo</h1>
    <h2 class="demo_headline">1. Default slide settings</h2>
    <slide-vue
      id="demo1"
      class="demo_slider"
    >
      <!-- <template slot="button-prev">
        <div>Prev</div>
      </template> -->
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
        <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
          <div
            class="slide__counter"
          >
            {{ index }}
          </div>
        </div>
      </template>
      <!-- <template slot="button-next">
        <div>Next</div>
      </template> -->
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue>
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">2. Set margins</h2>
    <slide-vue
      id="demo2"
      class="demo_slider"
      :margin-start="40"
      :margin-end="40"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
         <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :margin-start="40"
        :margin-end="40"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">3. Set two slides per view</h2>
    <slide-vue
      id="demo3"
      class="demo_slider"
      :slides-per-view="2"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
         <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :slides-per-view="2"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">4. Set gap between</h2>
    <slide-vue
      id="demo4"
      class="demo_slider"
      :slides-per-view="2"
      :slide-gap-between="20"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
        <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :slides-per-view="2"
        :slide-gap-between="20"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">5. Set amount of slides per breakpoint</h2>
    <slide-vue
      id="demo5"
      class="demo_slider"
      :slides-per-view="{
        'default': 1,
        500: 2,
        1200: 10,
        800: 'auto',
        1000: 4,
      }"
      :slide-gap-between="10"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
        <div
          :key="`slide-${index}`"
          class="slide"
          style="overflow: hidden"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="height: 500px"
            class="slide__image"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :slides-per-view="{
          `default`: 1,
          500: 2,
          1200: 10,
          800: `auto`,
          1000: 4,
        }"
        :slide-gap-between="10"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="height: 500px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">6. Set decimal slide value</h2>
    <slide-vue
      id="demo6"
      class="demo_slider"
      :slide-gap-between="20"
      :slides-per-view="{
        'default': 2.5,
        1000: 4.5,
      }"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
        <div 
          :key="`slide-${index}`"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :slide-gap-between="20"
        :slides-per-view="{
          `default`: 2.5,
          1000: 4.5,
        }"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>
    

    <h2 class="demo_headline">7. Slide all visible slides</h2>
    <slide-vue
      id="demo7"
      class="demo_slider"
      :slide-gap-between="20"
      :slides-per-view="3"
      slides-per-page="auto"
      :margin-start="40"
      :margin-end="40"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
       <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
          <div
            class="slide__counter"
          >
            {{ index }}
          </div>
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :slide-gap-between="20"
        :slides-per-view="3"
        slides-per-page="auto"
        :margin-start="40"
        :margin-end="40"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>

    <h2 class="demo_headline">8. Set initial slide</h2>
    <slide-vue
      id="demo8"
      class="demo_slider"
      :initial-slide-index="2"
    >
      <template
        v-for="(slide, index) in slides"
        :slot="`slide-${index}`"
      >
        <div
          :key="`slide-${index}`"
          class="slide"
        >
          <img 
            :src="`./images/slide${index}.jpg`"
            style="width: 100%; max-height: 600px"
            class="slide__image"
          />
        </div>
      </template>
    </slide-vue>
    <code-snippet
      code=
      '<slide-vue
        :initial-slide-index="2"
      >
        <template
          v-for="(slide, index) in slides"
          :slot="`slide-${index}`"
        >
          <div
            :key="`slide-${index}`"
          >
            <img 
              :src="`./images/slide${index}.jpg`"
              style="width: 100%; max-height: 600px"
            />
          </div>
        </template>
      </slide-vue>'
    >
    </code-snippet>
  </div>
</template>

<script>
  import Slide0 from './images/slide0.jpg';
  import Slide1 from './images/slide1.jpg';
  import Slide2 from './images/slide2.jpg';
  import Slide3 from './images/slide3.jpg';
  import Slide4 from './images/slide4.jpg';
  import Slide5 from './images/slide5.jpg';
  import Slide6 from './images/slide6.jpg';
  import Slide7 from './images/slide7.jpg';
  import Slide8 from './images/slide8.jpg';
  import Slide9 from './images/slide9.jpg';
  import Slide10 from './images/slide10.jpg';
  import CodeSnippet from './components/CodeSnippet/CodeSnippet.vue';

  export default {
    components: {
      CodeSnippet
    },
    data() {
      return {
        slides: [
          {
            title: '0'
          },
          {
            title: '1'
          },
          {
            title: '2'
          },
          {
            title: '3'
          },      
          {
            title: '4'
          },
          {
            title: '5'
          },
          {
            title: '6'
          },
          {
            title: '7'
          },
          {
            title: '8'
          },
          {
            title: '9'
          },
          {
            title: '10'
          }
        ]
      }
    }
  }
</script>

<style>
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 50px;
    font-family: 'Montserrat', sans-serif;
  }

  .demo_slider {
    margin-block-end: 40px;
  }

  .demo_main-title {
    font-weight: 700;
  }

  .demo_headline {
    font-weight: 400;
    margin-top: 100px;
  }

  .slide {
    position: relative;
  }

  .slide__counter {
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 80px;
    background: white;
    opacity: .7;
    padding: 20px;
    font-size: 40px;
    right: 0;
    line-height: 100%;
    text-align: center;
  }

  .slider__btn {
    border: none;
    box-shadow: none;
    border-radius: 0;
    background: transparent;
    padding: 10px;
    cursor: pointer;
  }

  .slider__btn--prev {
    left: 20px;
  }

  .slider__btn--prev {
    right: 20px;
  }

  .slider__btn::after,
  .slider__btn::before {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    top: -50%;
  }

  .slider__btn::after {
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    transform: rotate(45deg);
    left: -50%;
  }

  .slider__btn::before {
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: rotate(45deg);
    left: calc(-50% - 2px);
  }

  .slider__btn--prev::after,
  .slider__btn--prev::before {
    transform: rotate(-135deg);
    right: -50%;
    left: initial;
  }

  .slider__btn--prev::before {
    right: calc(-50% - 2px);
  }

  .slider__btn--disabled::after,
  .slider__btn--disabled::before {
    opacity: 0.5;
    cursor: auto;
  }

  .slider__element {
    height: 150px;
  }

  @media (max-width: 1000px) { 
    body {
      padding: 30px;
    }

    .slide__counter {
      width: 40px;
      height: 40px;
      padding: 10px;
      font-size: 20px;
    }
  }
</style>