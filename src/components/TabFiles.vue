<template>
  <div class="container">
    <div class="filter__container">
      <input type="text" v-model="filter" />
    </div>
    <ul class="list">
      <li
        v-for="file in filteredFileList"
        :key="file.name"
        @click="loadFile(file.id)"
      >
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Files from "../utils/files";
import { useStore } from "../store/store";
import { MutationTypes } from "../store/mutations-types";

const store = useStore();

export default defineComponent({
  name: "TabFiles",
  data() {
    return {
      files: Files,
      filter: ""
    };
  },
  computed: {
    filteredFileList(): { name: string; id: number }[] {
      if (this.filter === "") {
        return this.fileList;
      }
      return this.fileList.filter(({ name }) => {
        return name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
      });
    },
    fileList(): { name: string; id: number }[] {
      const list: { name: string; id: number }[] = [];
      Files.forEach((mFile, i) => {
        list.push({
          name: mFile.name,
          id: i
        });
        if (mFile.aliases) {
          list.push(
            ...mFile.aliases.map(name => {
              return {
                name,
                id: i
              };
            })
          );
        }
      });
      list.sort((a, b) => a.name.localeCompare(b.name));
      return list;
    }
  },
  methods: {
    loadFile: function(id: number) {
      store.commit(MutationTypes.CHANGE_FILE, Files[id]);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  flex: 1 1;
}
.list {
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #eceff1;
  li {
    padding: 0.4rem 0.4rem;
    cursor: pointer;
    border-bottom: 1px solid #eceff1;
    &:hover {
      background: rgb(241, 245, 247);
      color: #01579b;
    }
  }
}
</style>
