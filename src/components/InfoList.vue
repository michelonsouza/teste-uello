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
                    <h3 class="text-dark font-weight-bold">{{infos.id}}</h3>
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
                    <p class="text-dark font-weight-bold">{{infos.name}}</p>
                    <address class="text-dark font-weight-bold">{{infos.address.address}}</address>
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
                    <p class="text-dark font-weight-bold">{{infos.invoice}}</p>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-row flex-md-column">
          <ul v-if="infos.driver">
            <li>
               <p class="text-muted font-weight-bold mb-0"><i>#1</i> Motorista</p>
               <ul>
                  <li>
                    <p class="text-dark font-weight-bold">{{infos.driver.name}}</p>
                    <p class="text-dark font-weight-bold">Previsão 15:00</p>
                  </li>
               </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
      <delivery-status :stage="stage" />
      <b-row class="mt-3 px-3">
        <b-col cols="12" md="6">
          <p class="text-muted font-weight-bold pl-3">Mapa</p>
          <map-history v-if="infos.name" :address="infos.address" :driver="infos.driver" />
        </b-col>
        <b-col cols="12" md="6">
          <b-row>
            <b-col>
              <p class="text-muted font-weight-bold">Data</p>
              <p class="text-muted mb-1" v-for="(dateInfo, index) in history" :key="index">{{dateInfo.date}}</p>
            </b-col>
            <b-col>
              <p class="text-muted font-weight-bold">Detalhes</p>
              <p class="text-muted mb-1" v-for="(descInfo, index) in history" :key="index">{{descInfo.description}}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import moment from 'moment';

import DeliveryStatus from './DeliveryStatus.vue';
import MapHistory from './MapHistory.vue';
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
    MapHistory,
  },
  computed: {
    stage() {
      return this.option[this.infos.status]
    },
    history() {
      return this.infos.history.map(history => {
        const date = moment(history.date).format('YYYY/MM/DD hh:mm');
        return { ...history, date }
      });
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
