<template>
  <div class="container">
    {{ $isUserAllowed }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'

export default Vue.extend({
  computed: {
    $isUserAllowed(): boolean {
      return user.$isUserAllowed
    }
  }
})
</script>

<style></style>
