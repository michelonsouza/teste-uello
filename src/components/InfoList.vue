<template>
  <div class="app_uello__info-list">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Status da entrega</h1>
      <b-button variant="outline-danger">Ajuda</b-button>
    </div>
    <b-container class="bg-light p-3">
      <b-row>
        <b-col cols="6" md="4" class="d-flex flex-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> Número do pedido</p>
               <ul>
                 <li><h2 class="text-dark font-weight-bold">12345</h2></li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="6" md="4" class="d-flex flex-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><TruckIcon class="status-icon"/> Status</p>
               <ul>
                 <li><h2 class="font-weight-bold info">Em separação</h2></li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="6" md="4" class="d-flex flex-column align-items-end">
          <ul>
            <li>
              <p class="text-muted font-weight-bold mb-0"><i>#1</i> Data da coleta</p>
              <ul>
                <li><p class="text-dark font-weight-bold">20/02/2019 - 13:46</p></li>
              </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DeliveryStatus from './DeliveryStatus.vue';
import TruckIcon from '../assets/img/truck-icon.svg';

export default {
  components: {
    DeliveryStatus,
    TruckIcon,
  },
};
</script>

<style lang="scss">
  .app_uello__info-list {
    h2 {
      color: #444;

      &.info {
        color: #02baef;
      }
    }

    ul {
      list-style: none;
      padding-left: 25px;
    }

    .status-icon {
      height: 16px;
      transform: rotateY(180deg);
    }

    .btn-outline-danger {
      color: #e63b4f;
      border-color: #e63b4f;
      font-weight: bold;

      &:hover {
        background-color: #e63b4f;
        color: #fff;
      }
    }
  }
</style>
