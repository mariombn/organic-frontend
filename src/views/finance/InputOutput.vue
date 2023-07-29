<template>
    <data-grid
    fetch-route="input-outputs"
    />
</template>

<script>
import DataGrid from '@/components/DataGrid.vue'

export default {
    components: {
        DataGrid,
    },
    data() {
        return {
            data: null
        }
    },
    methods: {},
}
</script>