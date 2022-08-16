<template>
  <div>
    <div v-if="customLabel" class="custom_label">
      {{ customLabel }}
    </div>

    <input
        class="input"
        v-bind="$attrs"
    />
    {{$attrs}}
  </div>
</template>

<script lang="ts" setup>
import {useAttrs} from 'vue';

defineProps({
  customLabel: {
    type: String,
    default: null,
  },
})

// const attrs = useAttrs()

</script>

<style lang="scss">

.input{
  background: $input_background_color;
  border: 1px solid $input_border_color;
  border-radius: 4px;
}

//.custom_label {
//  margin-bottom: 2px;
//  font-weight: 400;
//  font-size: 12px;
//  line-height: 18px;
//  color: #6B6B6B;
//}

</style>
