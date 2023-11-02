<script setup lang="ts">
import paul from '@/assets/images/profile-paul.jpeg'
import Page from '@/components/Page.vue'
</script>

<template>
  <Page>
    <template v-slot:text>
      <div>
        Mijn gedrevenheid in het stedebouwkundig vak komt voort uit grensoverschrijdend gedrag. Geen
        verschillen tussen wonen, werken en ontspannen; vormgeving is gekoppeld aan functie; voor
        mij bestaan ze naast elkaar en lopen ze als vanzelf in elkaar over. Daarom geniet ik van
        mijn werk. En dat doe ik graag met mensen waarmee het klikt. Mijn plannen voor de
        leefomgeving zijn om bij weg te dromen, én om te realiseren. Ze geven plezier en verbeteren
        de omgeving. Goede plannen voor stad en landschap zijn cruciaal voor het welzijn van de
        mens. Stedebouw is voor mij een beeldende discipline. Ik bijt me vast in de opgave met een
        degelijke analyse; pas dan krijgt een plan vanzelfsprekendheid. Het plan moet geworteld zijn
        in de omgeving en ten dienste staan van de gebruikers. Het detail is verklaarbaar vanuit het
        grote geheel. Er zijn dan minder woorden nodig voor de uitleg. Dit is bepalend voor mijn
        handschrift. Ik voel mij goed bij complexe ruimtelijke situaties en uiteenlopende belangen.
        Mijn opdrachtgever kan komen met een moeilijke ruimtelijke opgave, maar hij weet waar hij
        naar toe wil. Samen zoeken we naar een creatieve oplossing. Ik werk graag als zelfstandige,
        na een ruime periode bij verschillende bureaus en gemeenten. Ik kies voor een persoonlijke
        benadering naar de opdrachtgever toe en wil me verdiepen in de belevingswereld van een
        ander. Door een netwerk van specialisten kan ik uiteenlopende opgaves aan en snel inspelen
        op de vraag. Het kan gaan om een herinrichting van een straat, een bebouwingsstudie of een
        bestemmingsplan.
      </div>
    </template>
    <template v-slot:image><v-img :src="paul" /></template>
  </Page>
</template>
