import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

process.env.NODE_ENV === "production" && Sentry.init({
  dsn: 'http://802fb5aa3f3344ef8d5b6382548e8d3c@192.158.157.128:9000/sentry/2',
  // 初始参数配置内容
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  // 触发异常后发送给 Sentry 的概率
  tracesSampleRate: 1.0,
  // 控制应捕获的面包屑(行为栈)的总量
  maxBreadcrumbs: 20,
  // 规定上下文数据结构的深度，默认为 3
  normalizeDepth: 100,
  // 版本信息
  release: "common@1.0.0",
  // 环境信息
  environment: process.env.NODE_ENV
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
