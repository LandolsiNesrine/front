import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        subItems: [
            {
                subItems: [],
                icon: 'bx-home-circle',
                link: '/administration/users',
                id: 2,
                label: 'menu.users',
                parentId: 1
            },
            {
                subItems: [],
                icon: "bx-home-circle",
                link: '/administration/profile',
                id: 9,
                label: 'menu.profile',
                parentId: 1
            },
            {
                subItems: [],
                icon: 'bx-home-circle',
                link: '/administration/logData',
                id: 3,
                label: "menu.logData",
                parentId: 1
            }
        ],
        icon: 'bx-home-circle',
        id: 1,
        label: 'menu.administration'
    },
    {
        id: 11,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/dashboard'
    },
    {
        id: 81,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 82,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 81
            },
            {
                id: 83,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 81
            },
            {
                id: 84,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 81
            },
            {
                id: 85,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 81
            },
            {
                id: 86,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 81
            },
            {
                id: 87,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/ui/lightbox',
                parentId: 81
            },
            {
                id: 89,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 81
            },
            {
                id: 90,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 81
            },
            {
                id: 91,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 81
            },
            {
                id: 92,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/ui/placeholder',
                parentId: 81
            },
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 81
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 81
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 81
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 81
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 81
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 81
            },
            {
                id: 99,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/ui/image-crop',
                parentId: 81
            },
        ]
    }
];

