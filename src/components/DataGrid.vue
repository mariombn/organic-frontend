<template>
    <div>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Filtros
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    Some content
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items-length="totalItems"
            :items="serverItems" :loading="loading" class="elevation-1" item-value="name"
            @update:options="loadItems"></v-data-table-server>
    </div>
</template>
<script>
import api from '@/api'

export default {
    props: {
        filter: {
            type: Array,
            default: [],
        },
        fetchRoute: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            itemsPerPage: 5,
            headers: [
                {
                    title: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    key: 'name',
                },
                { title: 'Calories', key: 'calories', align: 'end' },
                { title: 'Fat (g)', key: 'fat', align: 'end' },
                { title: 'Carbs (g)', key: 'carbs', align: 'end' },
                { title: 'Protein (g)', key: 'protein', align: 'end' },
                { title: 'Iron (%)', key: 'iron', align: 'end' },
            ],
            serverItems: [],
            loading: true,
            totalItems: 0,
        }
    },
    methods: {
      loadItems ({ page, itemsPerPage, sortBy }) {
        this.loading = true
        const url = this.fetchRoute + '?page=' + page + '&itensPerPage=' + itemsPerPage + '&sortBy=' + sortBy
        api.get(url, this.auth)
        .then((res) => {
          this.$store.commit('setUser', res.data.data)
        })
        .catch((error) => {
          console.log(error)
        }).finally(() => {
          this.loading = false;
        })

      },
    },
}
</script>