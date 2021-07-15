<template>
  <div class="events">
    <h1>Events For Good</h1>
    <Students v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Organizer {
  display: flex;
  flex-direction: column;
  text-align: right;
}
</style>

<script>
// @ is an alias to /src
import Students from '@/components/Students.vue'
import Student from '@/services/Student.js'

export default {
  name: 'Studentss',
  components: {
    Students
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    Student.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
