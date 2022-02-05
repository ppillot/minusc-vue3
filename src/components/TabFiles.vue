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
import { useStore } from "../store/state";
import { mapActions } from "pinia";

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
    ...mapActions(useStore, ['changeFile']),
    loadFile: function(id: number) {
      this.changeFile(Files[id]);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  flex: 1 1;
}

.filter__container {
  text-align: center;
  input {
    line-height: 2.4em;
    border-radius: 50px;
    width: calc(100% - 2em);
    margin: 0.8em 0;
    background: #263238;
    border: none;
  }
}

.list {
  margin: 0;
  padding: 0;
  width: 100%;
  border-top: 1px solid #0c1c24;
  li {
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    border-bottom: 1px solid #0c1c24;
    line-height: 2em;
    &:hover {
      background: #535e63;
    }
  }
}
</style>
