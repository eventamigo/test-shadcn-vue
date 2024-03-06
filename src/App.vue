<template>
    <RouterView />
    <Toaster />
</template>





<script lang="ts" setup>
import { useDark } from "@vueuse/core"
import Toaster from '@/components/ui/toast/Toaster.vue'

const isDark = useDark()

</script>





<style>



</style>