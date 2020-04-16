<template lang="pug">
  .l-about-us-page
    .l-container.l-container__flex
      .l-text__50.l-text__mobile-last
        h2 Über uns
        p Wir sind eine Gruppe von Entwicklern, die gern und eigentlich täglich mit dem Fahrrad unterwegs sind bzw. waren in Zeiten von COVID-19.
        p Und genau aus diesem Grund und er liebe zum Fahrrad haben wir uns entschlossen COVIBIKE zu gründen.
      img.l-text__50(src="~/assets/about-us.png" width="650")
    .l-container.l-container__flex
      img.l-text__50(src="~/assets/fight.png" width="650")
      .l-text__50
        h2 Kamp aufnehmen
        p In Zeiten von COVID-19 sind wir mehr oder wenig gezwunden mehr daheim zu sein und haben aum gelegenheit aus dem Haus zu kommen.
        p Besonders Leute, die kein eigenes Auto besitzen sind in der jetzigen Situation sehr eingeschränkt in ihrer Mobilität.
        p Mit COVIBIKE wollen wir COVID-19 den Kamp ansagen und den Leuten wieder mehr Mobilität bereitstellen.
    .l-container.l-container__flex
      .l-text__50.l-text__mobile-last
        h2 Menschen zusammenbringen
        p Das Ziel ist es Menschen wieder die Mobilität zu geben, dass Sie trotz der jetzigen Umstande schnell und einfach an ihr Ziel gelangen.
      img.l-text__50(src="~/assets/group-park.png" width="650")

</template>

<script>
export default {
  name: 'Home',
  components: {},
  mounted() {
    // this.getData()
  },
  methods: {}
}
</script>
