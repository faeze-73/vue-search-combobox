<template>
  <v-container class="bg-surface-variant" data-app>
    <v-row no-gutters>
      <v-col cols="12" style="position: relative">
        <v-combobox
          label="Combobox"
          :items="items"
          v-model="selectedItem"
          :item-text="(item) => item.label.toUpperCase()"
          style="z-index: 100"
        ></v-combobox>

        <v-card v-show="showSelectedCard" style="overflow-y: auto; height: 500px;">
            <v-data-table
              :headers="headers"
              :items="visibleItems"
              item-key="name"
              class="elevation-1"
              :search="search"
              :custom-filter="filterOnlyCapsText"
              @page-count="loadMoreItems"
              :loading="loading"
              @scroll="checkScroll"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  label="جست و جوی موارد"
                  class="mx-4"
                ></v-text-field>
              </template>
            </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      items: [
        { id: 1, label: "one" },
        { id: 2, label: "two" },
        { id: 3, label: "three" },
      ],
      showSelectedCard: false,
      search: "",
      calories: "",
      desserts: [
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان دوم",
          calories: "واحد دهم"
        },
        {
          name: "عنوان سوم",
          calories: "واحد دوم"
        },
        {
          name: "عنوان چهارم",
          calories: "واحد سوم"
        },
        {
          name: "عنوان پنجم",
          calories: "واحد چهارم"
        },
        {
          name: "عنوان ششم",
          calories: "واحد پنجم"
        },
        {
          name: "عنوان هفتم",
          calories: "واحد ششم"
        },
        {
          name: "عنوان هشتم",
          calories: "واحد هفتم"

        },
        {
          name: "عنوان نهم",
          calories: "واحد هشتم"
        },
        {
          name: "عنوان دهم",
          calories: "واحد نهم"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
        {
          name: "عنوان اول",
          calories: "واحد اول"
        },
      ],
      headers: [
        {
          text: "عنوان",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "واحد",
          value: "calories",
        }
      ],
      visibleItems: [],
      loading: false,
    };
  },
  created() {
    this.loadMoreItems();
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    loadMoreItems() {
      if (!this.loading) {
        this.loading = true;

        setTimeout(() => {
          const startIndex = this.visibleItems.length;
          const endIndex = startIndex + 5;
          const newItems = this.desserts.slice(startIndex, endIndex);

          this.visibleItems = [...this.visibleItems, ...newItems];

          this.loading = false;
        }, 2000);
      }
    },
    checkScroll(e) {
      const el = e.target;
      if (el.scrollHeight - el.scrollTop <= el.clientHeight + 50) {
        this.loadMoreItems();
      }
    },
  },
  watch: {
    selectedItem(newVal) {
      if (newVal) {
        this.showSelectedCard = true;
      } else {
        this.showSelectedCard = false;
      }
    },
    search() {
      this.visibleItems = [];
      this.loadMoreItems();
    },
  },
};
</script>

<style>
.v-card {
  position: absolute;
  top: -20px;
  left: 0;
  z-index: 100;
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  max-width: 100%;
}
</style>
