// const loggedIn = false;
// export default defineNuxtRouteMiddleware((to, from) => {
//   if (to.path === "/" && !loggedIn) {
//     return navigateTo("/");
//   }
// });

// export default defineNuxtRouteMiddleware((to, from) => {
//   // Check if the code is running on the client side
//   if (process.client) {
//     const token = localStorage.getItem("token");
//     const loggedIn = !!token;

//     if (to.path === "/dashboard" && !loggedIn) {
//       return navigateTo("/");
//     }

//     if (to.path === "/" && loggedIn) {
//       return navigateTo("/dashboard");
//     }
//   }
// });

// import { nextTick } from "vue";

// export default defineNuxtRouteMiddleware(async (to, from) => {
//   // Check if the code is running on the client side
//   if (process.client) {
//     const token = localStorage.getItem("token");
//     const loggedIn = !!token;

//     if (to.path === "/dashboard" && !loggedIn) {
//       await nextTick();
//       return navigateTo("/");
//     }

//     if (to.path === "/" && loggedIn) {
//       await nextTick();
//       return navigateTo("/dashboard");
//     }
//   }
// });

export default defineNuxtRouteMiddleware((to, from) => {
  // Check if the code is running on the client side
  if (process.client) {
    const token = localStorage.getItem("token");
    const loggedIn = !!token;

    if (to.path === "/dashboard" && !loggedIn) {
      return navigateTo("/");
    }

    if (to.path === "/" && loggedIn) {
      return navigateTo("/dashboard");
    }
  }
});
