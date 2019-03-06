/** When your routing table is too long, you can split it into small modules* */

import Layout from '@/views/layout/Layout.vue';

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component',
  },
  children: [
    {
      path: 'splitpane',
      component: () => import('@/views/components-demo/splitpane'),
      name: 'SplitpaneDemo',
      meta: { title: 'splitPane' },
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'sticky' },
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/countTo'),
      name: 'CountToDemo',
      meta: { title: 'countTo' },
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'componentMixin' },
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/backToTop'),
      name: 'BackToTopDemo',
      meta: { title: 'backToTop' },
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/dragDialog'),
      name: 'DragDialogDemo',
      meta: { title: 'dragDialog' },
    },
  ],
};

export default componentsRouter;