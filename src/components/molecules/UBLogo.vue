<template>
  <UBImage alt="Ubook Logo" :image="logo" width="148" height="32" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UBImage from "@atoms/UBImage.vue";
import logo from "@/assets/ubook.svg";

export default defineComponent({
  name: "UBLogo",
  setup() {
    return { logo };
  },
  components: {
    UBImage,
  },
});
</script>

<style lang="scss" scoped></style>
