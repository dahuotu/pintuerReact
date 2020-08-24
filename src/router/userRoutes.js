export default [
  {
    path: "/example/page1",
    title: "示例1",
    fatherExact: true,
    component: () => import("../pages/example/page1"),
  },
  {
    path: "/example/page2",
    title: "示例2",
    fatherExact: true,
    component: () => import("../pages/example/page2"),
  },
  {
    path: "/404",
    title: "404",
    fatherExact: true,
    component: () => import("../pages/general/404"),
  },
];
