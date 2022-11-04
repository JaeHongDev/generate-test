<template>
  <v-app>
    1234
    <EditorContent/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-2'
export default Vue.extend({
  name: 'App',

  data: () => ({
    editor: new Editor({
      extensions:[StarterKit],
    }),
  }),
});
</script>
