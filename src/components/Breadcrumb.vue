<template>
    <div class="col">
        <nav aria-label="breadcrumb">
            <ul class="breadcrumb">
                <template v-for="(item, index) in items">
                    <template v-if="index + 1 == items.length">
                        <li class="breadcrumb-item active" :key="index">
                            {{ item.text }}
                        </li>
                    </template>

                    <template v-else>
                        <li class="breadcrumb-item" :key="index">
                            <template v-if="item.nativeFn">
                                <router-link
                                        class="border-0"
                                        :to="{ name: item.name }"
                                        @click.native="item.nativeFn(item.nativeFnData)"
                                >
                                    {{ item.text }}
                                </router-link>
                            </template>

                            <template v-else>
                                <router-link
                                        class="border-0"
                                        :to="{ name: item.name }"
                                >
                                    {{ item.text }}
                                </router-link>
                            </template>
                        </li>
                    </template>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',

    props: {
      items: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>