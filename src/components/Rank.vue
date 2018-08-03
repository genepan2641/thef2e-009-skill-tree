<template>
    <div class="rank">
        <span class="rank__tag">CURRENT RANK</span>
        <br>
        <h2 class="rank__title">FRONT-END</h2>
        <br>
        <h2 class="rank__title">{{ currentRank | capitalize}}</h2>
        <div class="rank__ship-wrapper">
            <img v-if="currentRank == img" class="rank__ship" v-for="(img, index) in Object.keys(descPair)" :index="index" :key="img" :src="`/static/img/img-ship-${img}@2x.png`" alt="">
        </div>
        <div class="rank__desc">
          <span v-html="descPair[currentRank]"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentRank: {type: String}
    },
    data() {
        return {
            descPair: {
                noob: 'Welcome aboard. Your mission is: <span class="rank__desc-remark">Collect the resources and learn the skills to upgrade the ship.</span> Good luck, captain!',
                beginner: 'Congradulations! You become the <span class="rank__desc-remark">“Front-end Beginnner”</span>. Keep searching the resources to upgrade to the next level.',
                developer: 'You’re doing well! Now you’re a <span class="rank__desc-remark">“Front-end Developer”</span>. It’s close to complete the upgrading program. Next level: Front-end Master.',
                master: 'Excellent! You’re a <span class="rank__desc-remark">“Front-end Master”</span> now. But a new galary was just detected by the system. Captain, make your choice.'
            }
        }
    },
    filters: {
        capitalize(val) {
            return val.toString().toUpperCase();
        }
    },
}
</script>

<style></style>
