<template>
  <div class="header" onload="this.startTime()">
    <h3 id="title">symulation time</h3>
    <p id="txt"></p>
  </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
          startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            document.getElementById('txt').innerHTML =
                h + ":" + m + ":" + s;
          },
          checkTime(i) {
            if (i < 10) {
                i = "0" + i
            } // add zero in front of numbers < 10
            return i;
          }
        },
        created() {
            setInterval(()=>this.startTime(), 1000)
        }
    }
</script>

<style scoped>

.header{
  width: 100%
}
.header > * {
  display:inline-block;
}

#txt{
  float: right;
  margin-right: 55px;
  font-size: 15px;
}

#title{
  float: left;
  margin-left: 10px;
}
</style>
