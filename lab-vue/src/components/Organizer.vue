<template>
  <div class="Organizer">
    <h4>{{ event.category }}</h4>
    <h4>{{ event.organizer }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Organizer',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.Organizer {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.Organizer:hover {
  transform: scale(1.02);
  box-shadow: 0 9px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
