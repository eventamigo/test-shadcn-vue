<template>
    <Button variant="outline" @click="toggleToast">
        Toggle toast
    </Button>
</template>





<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

const toggleToast = () => {
    toast({
        title: "Hello, world!",
        description: "I am a toast and I work out of the box!"
    })
}

</script>





<style>



</style>