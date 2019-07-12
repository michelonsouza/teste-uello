<template>
  <b-container>
    <div class="app_uello__status-container">
      <div class="app_uello__status-container--progress-container">
        <div class="progress-bar">
          <div class="progress" :class="`stage-${stage}`"></div>
        </div>
        <div class="check-point-group" :class="{active: stage >= 1}">
          <img class="logo" :src="require('@/assets/img/envelope.png')" alt="envelope">
          <div class="check-point"></div>
          <p class="status">Solicitação</p>
        </div>
        <div class="check-point-group" :class="{active: stage >= 2}">
          <img class="logo" :src="require('@/assets/img/caixa.png')" alt="box">
          <div class="check-point"></div>
          <p class="status">Aguardando Coleta</p>
        </div>
        <div class="check-point-group" :class="{active: stage >= 3}">
          <TruckIcon class="logo"/>
          <div class="check-point"></div>
          <p class="status">Motorista em transito</p>
        </div>
        <div class="check-point-group" :class="{active: stage == 4}">
          <GiftIcon class="logo"/>
          <div class="check-point"></div>
          <p class="status">Pedido coletado</p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import TruckIcon from '@/assets/img/truck.svg'
import GiftIcon from '@/assets/img/gift-2.svg'

export default {
  props: {
    stage: {
      type: Number,
      default: () => 1
    },
  },
  components: {
    TruckIcon,
    GiftIcon
  }
}
</script>

<style lang="scss">
.app_uello__status-container--progress-container {
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;

  .progress-bar {
    height: 6px;
    display: flex;
    background-color: #d8d8d8;
    position: absolute;
    width: 90%;
    margin-left: 4%;
    bottom: 35px;

    .progress {
      height: 100%;
      background-color: #e63b4f;
      width: 0;
      transition: width 250ms ease;

      &.stage-2 {
        width: 31.33%;
      }

      &.stage-3 {
        width: 67%;
      }

      &.stage-4 {
        width: 100%;
      }
    }
  }

  .check-point-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .logo {
      height: 28px;
    }

    &.active {
      .check-point {
        border-color: #e63b4f;
      }

      .status {
        color:#e63b4f;
      }
    }

    .check-point {
      height: 25px;
      width: 25px;
      background-color: #fff;
      border: 4px solid #d8d8d8;
      z-index: 10;
      border-radius: 50%;
      margin: 0;
    }

    .status {
      font-weight: bold;
      font-size: 14px;
      color: #d8d8d8;
      margin: 5px 0 0;
    }
  }
}
</style>
