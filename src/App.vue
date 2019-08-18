<template>
  <div id="app">
    <h1 style='color: #652b2b'>
      Vue Dropdown Advanced test page
    </h1>

    <div class='button-block'>

      <div class="row">

        <div class='button example-dr'>
          <span style="color:red">Async</span> Down Right
          <drop-down-menu v-bind:itemsAsync="getAsyncItems" :click="this.onClick">  </drop-down-menu>
        </div>

        <div class='button example-dl' >
          Down Left
          <drop-down-menu v-bind:items="myitems_dl" :click="this.onClick" direction="down-left">  </drop-down-menu>
        </div>

        <div class='button example-dl' >
          Showcase
          <drop-down-menu v-bind:items="myitems_sc" :click="this.onClick" direction="down-left">  </drop-down-menu>
        </div>

      </div>

      <div class="row">

        <div class='button example-ur'>
          Up Right
          <drop-down-menu v-bind:items="myitems_ur" :click="this.onClick" direction="up-right">  </drop-down-menu>
        </div>

        <div class='button example-ul'>
          Up Left
          <drop-down-menu v-bind:items="myitems_ul" :click="this.onClick" direction="up-left">  </drop-down-menu>
        </div>

        <div class='button example-programmatically'>
          Just a normal 'div'
        </div>

        <div class='button' id='make-dropdown'>
          Convert left div to a DropDown button!
        </div>

      </div>

    </div>

    <hr /> 
        
    <a>Click me to make this button a vue dropdown control!</a>

    

    <div class='notification' v-bind:class="{ show: msg.length > 0 }">
      {{ msg }}
    </div>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { DropDownControl, DropDownMenu, DropDownInfo, DropDownItemBase, ActionItem, HeaderItem, DropDownDirection, 
  getTestItems, delay, createGuidRight5 } from 'vue-dropdown-advanced'

let xx = DropDownMenu;

let guid = createGuidRight5();
console.log(guid);

export default Vue.extend({
  name: "App",
  data: () => {
    const myitems_dr : DropDownItemBase[] = [];
    const myitems_dl : DropDownItemBase[] = [];
    const myitems_ur : DropDownItemBase[] = [];
    const myitems_ul : DropDownItemBase[] = [];
    const myitems_sc : DropDownItemBase[] = [];
    const msg: string = "";
    return {
      myitems_dr,
      myitems_dl,
      myitems_ur,
      myitems_ul,
      myitems_sc,
      msg
    }
  },
  components: {
    DropDownMenu
  },
  methods: {
      onClick(info: DropDownInfo) {
        let msg = `Item '${info.item.text}' was clicked. [key: ${info.item.key}] - `;
        msg += `ItemsCount: ${info.items.length}`;
        if (info.imageOnRight)
          msg += ` - RightImage was clicked: ${info.imageOnRight.imageRight}`;
        console.log(msg);
        this.showNotification(msg);
      },
      async getAsyncItems() {
        await delay(1000);
        return this.myitems_dr;
      },
      async showNotification(msg) {
        this.msg = msg;
        await delay(3000);
        if (this.msg == msg)
          this.msg = "";
      }
  },
  created() {
    this.myitems_dr = getTestItems("logout");
    this.myitems_dl = getTestItems("logout-simple");
    this.myitems_ur = getTestItems("options-simple");
    this.myitems_ul = getTestItems("options");
    this.myitems_sc = getTestItems("showcase");
  },
  mounted() {

    let btnConvert = document.getElementById("make-dropdown");
    
    btnConvert.onclick = () => {
      let prog = document.getElementsByClassName("example-programmatically");
      
      let x = new DropDownControl(prog[0]);
      x.items = getTestItems("showcase");
      x.openOnCreate = true;
      x.onClick = (info: DropDownInfo) => {
        console.log("example-programmatically-openOnCreate: " + info.item.key)
      }
      x.minWidth = "240px"
      x.maxHeight = "250px";
      //setTimeout(() => x.createMenu());   // TAKE NOTE - fix this please...
      x.createMenu();     // first time doesn't auto popup... 
    }


    // setTimeout(() => {
    //   // example-programmatically
    //   let prog = document.getElementsByClassName("example-programmatically");
      
    //   let x = new DropDownControl(prog[0]);
    //   x.items = getTestItems("showcase");
    //   x.openOnCreate = true;
    //   x.onClick = (info: DropDownInfo) => {
    //     console.log("example-programmatically-openOnCreate: " + info.item.key)
    //   }
    //   x.minWidth = "240px"
    //   x.maxHeight = "250px";
    //   x.createMenu();  
    // }, 2000);
  }
});

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.row {
  padding-top: 30px;
}

.button {
  display: inline-block;
  border: 1px solid darkblue;
  background: lightgray;
  margin: 25px;
  padding: 5px;
  width: 115px;
  font-size: 12px;
  
  &:hover{
    background:rgb(152, 152, 168);
    cursor: pointer;
  }
}

.notification {
    position: fixed;
    right: 20px;
    bottom: 20px;
    border: 2px solid green;
    padding: 10px;
    background: #e1f3e1;
    border-radius: 6px;
    opacity: 0;
    -webkit-transition: opacity 0.2s; /* Safari */
    transition: opacity 0.2s;

    &.show {
      opacity: 1;
    }
}

.button-block {
  border: 1px solid #7e799c;
  background: #f7f7f7;
  margin: 30px 0 30px 0;
  padding: 10px 0 40px 0;
}

</style>
