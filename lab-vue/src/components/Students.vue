<template>
  <div class="Students">
    <h4>{{ event.name }} {{event.surname}}</h4>
    <h4>{{ event.gpa}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Students',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.Students {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.Students:hover {
  transform: scale(1.02);
  box-shadow: 0 9px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
