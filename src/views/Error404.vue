<template>
    <div class="container fade-in">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center">
                    <img alt="Vue logo" src="../assets/logo.png">

                    <h1 class="text-muted">404</h1>

                    <div>
                        <router-link
                                class="border-0"
                                :to="{ name: 'Home' }"
                        >
                            {{ $t('continue') | capitalize }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Error404'
  }
</script>
