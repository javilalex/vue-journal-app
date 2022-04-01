export default {
    path: '/daybook',
    name: 'daybook',
    component: () => import(/*WebpackChunkName: "daybook" */  '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'NoEntrySelected',
            component: () => import(/*WebpackChunkName: "NoEntrySelected" */  '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'EntryView',
            component: () => import(/*WebpackChunkName: "EntryView" */  '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}