<template>
    <div class="col-md-3 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">{{ $t('yourCart') | capitalize }}</span>

            <span class="badge badge-secondary badge-pill">{{ itemsCount }}</span>
        </h4>

        <ul class="list-group mb-3">
            <template v-for="item in items">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div class="d-flex align-items-center">
                        <i class="fa fa-times pointer" @click="spliceItems(item)"></i>
                    </div>

                    <div>
                        <h6 class="my-0">{{ item.name }}</h6>
                        <small class="text-muted">{{ item.category.name }}</small>
                    </div>

                    <span class="text-muted">{{ item.price }} &euro;</span>
                </li>
            </template>

            <template v-if="itemsCount">
                <li class="list-group-item d-flex justify-content-between">
                    <span>{{ $t('total') | capitalize }} (EUR)</span>

                    <strong>{{ totalPrice }} &euro;</strong>
                </li>
            </template>

            <template v-else>
                <li class="list-group-item d-flex justify-content-between">
                    <span>{{ $t('yourCartIsEmpty') | capitalize }}</span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: 'Cart',

    methods: {
      ...mapMutations('cart', [
        'spliceItems'
      ])
    },

    computed: {
      ...mapGetters('cart', [
        'items',
        'itemsCount',
        'totalPrice'
      ])
    }
  }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
