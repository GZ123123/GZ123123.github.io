<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-9 gap-y-10 md:gap-y-[46px]">
    <template v-for="(card, index) in cards" :key="index">
      <div class="cards aspect-square rounded-lg md:rounded-3xl border-[1.33px] md:border-[3px] border-white p-3">
        <Dialog>
          <div class="w-16 md:w-[154px] h-16 md:h-[154px]">
            <component :is="card.icon" />
          </div>
        </Dialog>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import IconsChristmasBell from '~/assets/icons/christmas-bell.svg'
import IconsChristmasStocking from '~/assets/icons/christmas-stocking.svg'
import IconsChristmasTree from '~/assets/icons/christmas-tree.svg'
import IconsChristmasWreath from '~/assets/icons/christmas-wreath.svg'
import IconsSantaClaus from '~/assets/icons/santa-claus.svg'
import IconsStar from '~/assets/icons/star.svg'

const cards = [
  { icon: IconsSantaClaus },
  { icon: IconsChristmasStocking },
  { icon: IconsStar },
  { icon: IconsChristmasWreath },
  { icon: IconsChristmasTree },
  { icon: IconsChristmasBell }
]
</script>

<style scoped>
.cards {
  position: relative;
}
.cards:hover svg {
		animation: shake-begin 150ms infinite linear, shake 1s infinite linear 150ms
}
.cards:hover::before {
  content: '';
	background: url("~/assets/icons/stars.svg") no-repeat center/contain;
	width: 48px;
	height: 48px;
	position: absolute;
	top: -24px;
	left: -24px
}


@keyframes shake-begin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(15deg);
  }
}

@keyframes shake {
  0% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
</style>