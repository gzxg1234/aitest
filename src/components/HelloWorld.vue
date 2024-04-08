<template>
  <div>
    <div><button @click="getToken">获取token</button></div>
    <div>{{  }}</div>

    <div>
      url<input type="text" v-model="newWindowUrl" /><br/>
      <button @click="openWindow">打开新window</button>
    </div>

    <div>
      <input type="checkbox" v-model="allChecked" />全部
      <input type="checkbox" v-model="personChecked" />人物
      <input type="checkbox" v-model="thingChecked" />事物
      <input type="checkbox" v-model="locChecked" />地点
    </div>
    <div>
      本地相册最大值mb<input type="number" v-model="locSize" /><br/>
      云相册最大值mb<input type="number" v-model="cloudSize" />
    </div>
    <div>
      本地相册限制格式<input type="text" v-model="locExt" /><br/>
      云相册限制格式b<input type="text" v-model="cloudExt"  />
    </div>
    <div> <button @click="selectPhoto">选择相片</button></div>
    <div> <img :src="cloudUrl" style="width: 200px;" /></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Base64 } from 'js-base64';
const loginInfo=ref("");
const allChecked = ref(true);
const personChecked = ref(true);
const thingChecked = ref(true);
const locChecked = ref(true);
const locSize = ref(10);
const cloudSize = ref(10);
const locExt = ref('jpg/jpeg/png/webp/bmp/heic/livp');
const cloudExt = ref('jpg/jpeg/png/webp/bmp/heic/livp');

const newWindowUrl = ref("http://www.baidu.com");

/* eslint-disable */
const cloudUrl = ref("https://img1.baidu.com/it/u=1965663592,580944689&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1712077200&t=dbdc0da29ffc3858139a0c988c04a14a");
window.hcy_getLocalSSOTokenCallback = function (token) {
  alert("token=" + token);
}


let imgData;

window.selectPhotoCallback = function (data) {
  let obj = JSON.parse(Base64.decode(data));
  console.log("selectPhotoCallback,obj=" + JSON.stringify(obj));
  if (obj.url) {
    cloudUrl.value = obj.url;
  } else if (obj.data) {
    if (obj.index == 1) {
      imgData = obj.data;
    } else {
      imgData += obj.data;
    }
    if (obj.index == obj.total) {
      //结束
      cloudUrl.value = "data:image/png;base64," + imgData;
    }
  }
}

function openWindow(){
    window.open(newWindowUrl.value);
}

function hcy_getLocalSSOToken() {
  if (typeof hcy != 'undefined') {
    hcy.hcy_getLocalSSOToken()
  }
}


function getToken(){
  if (typeof hcy != 'undefined') {
    loginInfo.value = hcy.getLoginInfo();
  }
}

function selectPhoto() {
    let json = JSON.stringify({
      action: "老骨头生成",
      categoryParam: {
        cloudPhotoSize: Math.ceil(cloudSize.value * 1024 * 1024),
        localPhotoSize: Math.ceil(locSize.value * 1024 * 1024),
        cloudPhotoFormat: cloudExt.value,
        localPhotoFormat: locExt.value,
        allPhoto: allChecked.value,
        personPhoto: personChecked.value,
        thingPhoto: thingChecked.value,
        locationPhoto: locChecked.value
      }
    });
    console.log(json);
  if (typeof hcy != 'undefined') {
    hcy.selectPhoto(Base64.encode(json));
  }
}
</script>}

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div div {
  margin-top: 50px;
}
</style>
