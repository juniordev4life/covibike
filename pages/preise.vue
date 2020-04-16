<template lang="pug">
  .l-price-page
    .l-container
      h1 Preise
      p Wir haben drei verschiedenen Pläne zur Auswahl, wo jeder etwas für sich finden sollte.
    .l-container.l-container__flex
      .plan
        .titleContainer
          .title Student
        .infoContainer
          .price
            p 2€
            span / Jahr
          .p.desc #[em Solider und günstiger Einstieg.]
          ul.features
            li #[strong 5] Freiminuten / Fahrt
            li #[strong 10] Cent / Minute
            li #[strong 1] COVIBIKE-Mundschutz / Jahr
            li #[strong 1] COVIBIKE-Handschuhe / Jahr
          a.selectPlan Buchen
      .plan
        .titleContainer
          .title Professor
        .infoContainer
          .price
            p 4€
            span / Jahr
          .p.desc #[em Ambitionierte Kampfansage.]
          ul.features
            li #[strong 15] Freiminuten / Fahrt
            li #[strong 10] Cent / Minute
            li #[strong 3] COVIBIKE-Mundschutz / Jahr
            li #[strong 3] COVIBIKE-Handschuhe / Jahr
          a.selectPlan Buchen
      .plan
        .titleContainer
          .title Virologe
        .infoContainer
          .price
            p $8
            span / Jahr
          .p.desc #[em Lasse mich nicht unterkriegen.]
          ul.features
            li #[strong 30] Freiminuten / Fahrt
            li #[strong 5] Cent / Minute
            li #[strong 12] COVIBIKE-Mundschutz / Jahr
            li #[strong 12] COVIBIKE-Handschuhe / Jahr
          a.selectPlan Buchen

</template>

<script>
export default {
  name: 'PricePage',
  components: {},
  mounted() {
    // this.getData()
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../scss/_global.scss';
@import '../scss/_button.scss';

$accent-color: $color-blue;
$text-color: #2d3b48;
$plan-padding: 1em;
$plan-margin: 1em;
$title-background: #f3f3f3;
$title-size: 1.45em;
$price-size: 1.35em;
$feature-size: 1em;

.planContainer {
  display: flex;
  flex-wrap: wrap;
  margin: $plan-margin;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.plan {
  background: white;
  width: 20em;
  box-sizing: border-box;
  text-align: center;
  margin: $plan-margin;
  margin-bottom: $plan-margin;
  border: 1px solid #7d8589;
  .titleContainer {
    background-color: $title-background;
    padding: $plan-padding;
    .title {
      font-size: $title-size;
      text-transform: uppercase;
      color: $accent-color;
      font-weight: 700;
    }
  }
  .infoContainer {
    padding: $plan-padding;
    color: $text-color;
    box-sizing: border-box;
    .price {
      font-size: $price-size;
      padding: $plan-padding 0;
      font-weight: 600;
      margin-top: 0;
      display: inline-block;
      width: 80%;
      p {
        font-size: $price-size;
        display: inline-block;
        margin: 0;
      }
      span {
        font-size: $price-size * 0.75;
        display: inline-block;
      }
    }
    .desc {
      padding-bottom: $plan-padding;
      border-bottom: 2px solid $title-background;
      margin: 0 auto;
      width: 90%;
      em {
        font-size: $feature-size;
        font-weight: 500;
      }
    }
    .features {
      font-size: $feature-size;
      list-style: none;
      padding-left: 0;
      margin-bottom: 24px;
      li {
        padding: $plan-padding/2;
      }
    }
    .selectPlan {
      @include button-primary();
      padding-left: 40px;
      padding-right: 40px;
    }
  }
}

@media screen and (max-width: 25em) {
  .planContainer {
    margin: 0;
    .plan {
      width: 80%;
      margin: $plan-margin 0;
    }
  }
}
</style>
