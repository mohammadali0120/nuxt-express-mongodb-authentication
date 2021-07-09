<template>
  <div>
    <user />
  </div>
</template>

<script>
export default {
  middleware: "isAuthenticated"
};
</script>

<style></style>
