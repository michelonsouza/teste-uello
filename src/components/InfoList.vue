<template>
  <div class="app_uello__info-list">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Status da entrega</h1>
      <b-button variant="outline-danger">Ajuda</b-button>
    </div>
    <b-container class="bg-light p-3">
      <b-row>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> Número do pedido</p>
               <ul>
                  <li>
                    <h3 class="text-dark font-weight-bold">{{infos.invoice}}</h3>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><TruckIcon class="status-icon"/> Status</p>
               <ul>
                 <li><h3 class="font-weight-bold info">{{infos.status}}</h3></li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
              <p class="text-muted font-weight-bold mb-0"><i>#1</i> Data da coleta</p>
              <ul>
                <li><p class="text-dark font-weight-bold mb-0 mt-2">20/02/2019 - 13:46</p></li>
              </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> De</p>
               <ul>
                  <li>
                    <p class="text-dark font-weight-bold">Michelo Souza</p>
                    <address class="text-dark font-weight-bold">Rua Paulo Augusto de Andrade, 158 - Taboão da Serra - SP</address>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> Nota fiscal</p>
               <ul>
                  <li>
                    <p class="text-dark font-weight-bold">1234567890</p>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul>
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> Motorista</p>
               <ul>
                  <li>
                    <p class="text-dark font-weight-bold">Marcio Marlon da Silva (Moto)</p>
                    <p class="text-dark font-weight-bold">Previsão 15:00</p>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
      <delivery-status :stage="stage" />
    </b-container>
  </div>
</template>

<script>
import DeliveryStatus from './DeliveryStatus.vue';
import TruckIcon from '../assets/img/truck-icon.svg';

export default {
  props: {
    infos: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      option: {
        'Solicitação': 1,
        'Aguardando Coleta': 2,
        'Motorista em trânsito': 3,
        'Pedido coletado': 4,
      },
    };
  },
  components: {
    DeliveryStatus,
    TruckIcon,
  },
  computed: {
    stage() {
      return this.option[this.infos.status]
    }
  }
};
</script>

<style lang="scss">
  .app_uello__info-list {
  h3 {
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
