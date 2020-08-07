# klickpages-support-chat

A Vue component for klick family applications to support chat rendering

## Install

``` npm install @klicksite/klickpages-support-chat ```

or

``` yarn add @klicksite/klickpages-support-chat ```

## Example

The Klickpages-support-chat component depends on your application having a vuex store already configured.

```js
//main.js

import Vue from 'vue';
import App from './App.vue';
import KlickpagesSupportChat from 'klickpages-support-chat';
import store from './store';

Vue.use(KlickpagesSupportChat, { store });

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

```

```html
<!-- App.vue -->

<template>
  <div>
    <router-view />
    <klickpages-support-chat :klickartUrl=""/>
  </div>
</template>

<script>

export default {};
</script>

```

## Documentation

| prop        | description                                 | required | default |
|-------------|-------------------------------------------  |----------|---------|
| klickartURL | klickart url according to the environment   | yes      | null    |

## Guide for developers

Acess the developer-guide:
 [Developer-guide](./developer-guide.md)
