<template>
    <div class="container fade-in mb-5">
        <div class="row">
            <Breadcrumb :items="items"/>
        </div>

        <div class="row">
            <div class="col-md-3">
                <div class="card bg-light">
                    <div class="card-header bg-primary text-white text-uppercase">
                        <i class="fa fa-list"></i>

                        {{ $tc('category', 2) }}
                    </div>

                    <ul class="list-group category_block">
                        <template v-for="(category, index) in categories">
                            <li
                                    class="list-group-item pointer"
                                    :class="category.id === selectedCategory.id ? 'text-primary' : ''"
                                    @click="setSelectedCategory(category)"
                                    :key="index"
                            >
                                {{ category.name }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="col-md-6">
                <transition-group class="row" name="list" tag="div">
                    <div v-for="product in products" class="col-12 col-md-6 col-lg-6 mb-4" :key="product.id">
                        <div class="card">
                            <img class="card-img-top" src="https://dummyimage.com/300x200/55595c/fff" alt="image">

                            <div class="card-body">
                                <div class="text-center mb-3">
                                    <span
                                            class="badge badge-info pointer"
                                            @click="setSelectedCategory(product.category)"
                                    >
                                        {{ product.category.name }}
                                    </span>
                                </div>

                                <h5 class="card-title text-center font-weight-normal">
                                    {{ product.name }}
                                </h5>

                                <p class="card-text text-center">{{ product.price }} &euro;</p>

                                <div class="text-center">
                                    <button class="btn btn-success pl-5 pr-5" @click="pushItems(product)">
                                        <i class="fa fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>

            <Cart/>
        </div>
    </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import { Breadcrumb, Cart } from '../components'

  export default {
    name: 'Home',

    components: {
      Breadcrumb,
      Cart
    },

    methods: {
      ...mapMutations([
        'setSelectedCategory'
      ]),

      ...mapMutations('cart', [
        'pushItems'
      ])
    },

    computed: {
      ...mapGetters([
        'categories',
        'products',
        'selectedCategory'
      ]),

      items () {
        let items = [
          {
            name: 'Home',
            text: this.$options.filters.capitalize(this.$t('home')),
            nativeFn: this.setSelectedCategory,
            nativeFnData: {}
          }
        ]

        if (this.selectedCategory.id) {
          items.push({
            name: 'Home',
            text: this.selectedCategory.name
          })
        }

        return items
      }
    }
  }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
    }

    .list-leave-active {
        position: absolute;
    }
</style>
