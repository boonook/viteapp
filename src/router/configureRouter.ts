import { Router } from 'vue-router';

function loginbycode(to, from, next) {
    next()
}

export default function hook(router: Router): void {
    router.beforeEach(loginbycode)
  }