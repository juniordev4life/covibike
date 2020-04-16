<template lang="pug">
  .l-home-page
    .l-container
      img(src="~/assets/start.png" width="1300")
      .l-text__overlay.l-text__overlay--40
        h1 COVIBIKE
        p Ihre sichere Mobilität in Zeiten von COVID-19!
        p Schnell und zuverlässig bringen wir Sie an Ihr Zielen.
        nuxt-link(to="/karte").l-text-overlay-button Finde ein COVIBIKE
    .l-container.l-container__flex
      img.l-text__50(src="~/assets/family.png" width="650")
      .l-text__50
        h2 #StayHome
        p In Zeiten von COVID-19 müssen wir zu Hause bleiben und können uns nur eingeschränkt fortbewegen.
        p Und ohne eigenes Auto sind wir auf öffentliche Transportmittel angewiesen, die nur teilweise sicher sind.
        p Und genau da will COVIBIKE ansetzen!
    .l-container.l-container__flex
      .l-text__50.l-text__mobile-last
        h2 Einfach zu benutzen
        p Um schnell von A nach B zu kommen ganz einfach fogende Schritte ausführen.
        ul
          li Mit dem Smartphone auf der Karte ein COVIBIKE suchen.
          li Auswählen und reservieren.
          li Losfahren!
      img.l-text__50(src="~/assets/easy.png" width="650")
    .l-container.l-container__flex
      img.l-text__50(src="~/assets/charity.png" width="650")
      .l-text__50
        h2 Einfach helfen
        p In dem Sie COVIBIKE nutzen unterstützen Sie automatisch die Forschung und Wissenschaft zur Bekämpfung von COVID-19.
        p
          | Mit jeden 100m, die Sie mit COVIBIKE zurücklegen, gehen 10 Cent direkt an die
          a(href="/") &nbsp;COVID-19 Charity Stiftung
          |.
        p Helfen Sie aktiv mit Covid-19 zu bekämpfen!

</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  mounted() {
    // this.getData()
  },
  methods: {}
}
</script>
