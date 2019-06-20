import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const departments: NavigationLink[] =
    [

        // /**********/////////////////*/*/*/////////////////*/*/*/   Computer Hardware   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Computer Hardware', url: './Computer-Hardware', menu: {
                type: 'megamenu',
                size: 'xl',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [
                            {
                                label: 'CPUs/ Processors', url: './CPUs-Processors', items: [
                                    { label: 'Desktop Processors', url: './shop' },
                                    { label: 'Server Processors', url: './shop' },
                                    { label: 'Mobile Processors', url: './shop' },
                                ]
                            },
                            {
                                label: 'Motherboards', url: './shop', items: [
                                    { label: 'AMDMotherboards', url: './shop' },
                                    { label: 'Server Motherboards', url: './shop' },
                                    { label: 'Embedded Solutions', url: './shop' },
                                    { label: 'Development Boards', url: './shop' }
                                ]
                            },
                            {
                                label: 'Memory', url: './shop', items: [
                                    { label: 'Desktop Memory', url: './shop' },
                                    { label: 'Laptop Memory', url: './shop' },
                                    { label: 'Server Memory', url: './shop' },
                                    { label: 'System Specific Memory', url: './shop' },
                                    { label: 'Mac Memory', url: './shop' }
                                ]
                            },
                            {
                                label: 'Mini Computers', url: './shop', items: [
                                    { label: 'Barebone PCs', url: './shop' },
                                    { label: 'Mini-PC Barebone', url: './shop' },
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Video Cards & Devices', url: './shop', items: [
                                    { label: ' Desktop Graphics Cards', url: './shop' },
                                    { label: 'Workstation Graphics Cards', url: './shop' },
                                    { label: 'Video Devices & TV Tuners', url: './shop' },
                                    { label: 'Video Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Computer Cases', url: './shop', items: [
                                    { label: 'Computer Cases', url: './shop' },
                                    { label: 'Server  Chassis', url: './shop' },
                                    { label: 'HTPC / Media Center Cases', url: './shop' },
                                ]
                            },
                            {
                                label: 'Fans & PC Cooling', url: './shop', items: [
                                    { label: 'CPU Fans &Heatsinks', url: './shop' },
                                    { label: 'Case Fans', url: './shop' },
                                    { label: 'Water / Liquid Cooling', url: './shop' },
                                    { label: 'Hard Drive Cooling', url: './shop' },
                                    { label: 'Memory & Chipset Cooling', url: './shop' },
                                ]
                            },
                            {
                                label: 'Power  Supplies', url: './shop', items: [
                                    { label: 'Power Supplies', url: './shop' },
                                    { label: 'Server Power Supplies', url: './shop' },
                                ]
                            }

                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Computer Accessories', url: './shop', items: [
                                    { label: 'PC Tools &; Testers', url: './shop' },
                                    { label: 'Hard Drive Enclosures', url: './shop' },
                                    { label: 'Add-On  Cards', url: './shop' },
                                    { label: 'SSD / HDD Accessories', url: './shop' },
                                    { label: 'Card  Readers', url: './shop' },
                                    { label: 'Adapters &; Gender Changers', url: './shop' },
                                    { label: 'Case Accessories', url: './shop' },
                                    { label: 'Controller Panels', url: './shop' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Sound Cards', url: './shop', items: [
                                    { label: 'Sound Cards', url: './shop' },
                                    { label: 'Sound Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Cables', url: './shop', items: [
                                    { label: 'Audio / Video Cables', url: './shop' },
                                    { label: 'Network Cables', url: './shop' },
                                    { label: 'Computer Cables', url: './shop' },
                                    { label: 'Computer Power Cables', url: './shop' },
                                    { label: 'Computer Video Cables', url: './shop' },
                                    { label: 'KVM Cables', url: './shop' },
                                ]
                            }


                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   PCs & Laptops   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'PCs & Laptops', url: './Computer-Hardware', menu: {
                type: 'megamenu',
                size: 'xl',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [
                            {
                                label: 'CPUs/ Processors', url: './CPUs-Processors', items: [
                                    { label: 'Desktop Processors', url: './shop' },
                                    { label: 'Server Processors', url: './shop' },
                                    { label: 'Mobile Processors', url: './shop' },
                                ]
                            },
                            {
                                label: 'Motherboards', url: './shop', items: [
                                    { label: 'AMDMotherboards', url: './shop' },
                                    { label: 'Server Motherboards', url: './shop' },
                                    { label: 'Embedded Solutions', url: './shop' },
                                    { label: 'Development Boards', url: './shop' }
                                ]
                            },
                            {
                                label: 'Memory', url: './shop', items: [
                                    { label: 'Desktop Memory', url: './shop' },
                                    { label: 'Laptop Memory', url: './shop' },
                                    { label: 'Server Memory', url: './shop' },
                                    { label: 'System Specific Memory', url: './shop' },
                                    { label: 'Mac Memory', url: './shop' }
                                ]
                            },
                            {
                                label: 'Mini Computers', url: './shop', items: [
                                    { label: 'Barebone PCs', url: './shop' },
                                    { label: 'Mini-PC Barebone', url: './shop' },
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Video Cards & Devices', url: './shop', items: [
                                    { label: ' Desktop Graphics Cards', url: './shop' },
                                    { label: 'Workstation Graphics Cards', url: './shop' },
                                    { label: 'Video Devices & TV Tuners', url: './shop' },
                                    { label: 'Video Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Computer Cases', url: './shop', items: [
                                    { label: 'Computer Cases', url: './shop' },
                                    { label: 'Server  Chassis', url: './shop' },
                                    { label: 'HTPC / Media Center Cases', url: './shop' },
                                ]
                            },
                            {
                                label: 'Fans & PC Cooling', url: './shop', items: [
                                    { label: 'CPU Fans &Heatsinks', url: './shop' },
                                    { label: 'Case Fans', url: './shop' },
                                    { label: 'Water / Liquid Cooling', url: './shop' },
                                    { label: 'Hard Drive Cooling', url: './shop' },
                                    { label: 'Memory & Chipset Cooling', url: './shop' },
                                ]
                            },
                            {
                                label: 'Power  Supplies', url: './shop', items: [
                                    { label: 'Power Supplies', url: './shop' },
                                    { label: 'Server Power Supplies', url: './shop' },
                                ]
                            }

                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Computer Accessories', url: './shop', items: [
                                    { label: 'PC Tools &; Testers', url: './shop' },
                                    { label: 'Hard Drive Enclosures', url: './shop' },
                                    { label: 'Add-On  Cards', url: './shop' },
                                    { label: 'SSD / HDD Accessories', url: './shop' },
                                    { label: 'Card  Readers', url: './shop' },
                                    { label: 'Adapters &; Gender Changers', url: './shop' },
                                    { label: 'Case Accessories', url: './shop' },
                                    { label: 'Controller Panels', url: './shop' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Sound Cards', url: './shop', items: [
                                    { label: 'Sound Cards', url: './shop' },
                                    { label: 'Sound Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Cables', url: './shop', items: [
                                    { label: 'Audio / Video Cables', url: './shop' },
                                    { label: 'Network Cables', url: './shop' },
                                    { label: 'Computer Cables', url: './shop' },
                                    { label: 'Computer Power Cables', url: './shop' },
                                    { label: 'Computer Video Cables', url: './shop' },
                                    { label: 'KVM Cables', url: './shop' },
                                ]
                            }


                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   PCs & Laptops   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Data Storage', url: './Data-Storage', menu: {
                type: 'megamenu',
                size: 'xl',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [
                            {
                                label: 'CPUs/ Processors', url: './CPUs-Processors', items: [
                                    { label: 'Desktop Processors', url: './shop' },
                                    { label: 'Server Processors', url: './shop' },
                                    { label: 'Mobile Processors', url: './shop' },
                                ]
                            },
                            {
                                label: 'Motherboards', url: './shop', items: [
                                    { label: 'AMDMotherboards', url: './shop' },
                                    { label: 'Server Motherboards', url: './shop' },
                                    { label: 'Embedded Solutions', url: './shop' },
                                    { label: 'Development Boards', url: './shop' }
                                ]
                            },
                            {
                                label: 'Memory', url: './shop', items: [
                                    { label: 'Desktop Memory', url: './shop' },
                                    { label: 'Laptop Memory', url: './shop' },
                                    { label: 'Server Memory', url: './shop' },
                                    { label: 'System Specific Memory', url: './shop' },
                                    { label: 'Mac Memory', url: './shop' }
                                ]
                            },
                            {
                                label: 'Mini Computers', url: './shop', items: [
                                    { label: 'Barebone PCs', url: './shop' },
                                    { label: 'Mini-PC Barebone', url: './shop' },
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Video Cards & Devices', url: './shop', items: [
                                    { label: ' Desktop Graphics Cards', url: './shop' },
                                    { label: 'Workstation Graphics Cards', url: './shop' },
                                    { label: 'Video Devices & TV Tuners', url: './shop' },
                                    { label: 'Video Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Computer Cases', url: './shop', items: [
                                    { label: 'Computer Cases', url: './shop' },
                                    { label: 'Server  Chassis', url: './shop' },
                                    { label: 'HTPC / Media Center Cases', url: './shop' },
                                ]
                            },
                            {
                                label: 'Fans & PC Cooling', url: './shop', items: [
                                    { label: 'CPU Fans &Heatsinks', url: './shop' },
                                    { label: 'Case Fans', url: './shop' },
                                    { label: 'Water / Liquid Cooling', url: './shop' },
                                    { label: 'Hard Drive Cooling', url: './shop' },
                                    { label: 'Memory & Chipset Cooling', url: './shop' },
                                ]
                            },
                            {
                                label: 'Power  Supplies', url: './shop', items: [
                                    { label: 'Power Supplies', url: './shop' },
                                    { label: 'Server Power Supplies', url: './shop' },
                                ]
                            }

                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Computer Accessories', url: './shop', items: [
                                    { label: 'PC Tools &; Testers', url: './shop' },
                                    { label: 'Hard Drive Enclosures', url: './shop' },
                                    { label: 'Add-On  Cards', url: './shop' },
                                    { label: 'SSD / HDD Accessories', url: './shop' },
                                    { label: 'Card  Readers', url: './shop' },
                                    { label: 'Adapters &; Gender Changers', url: './shop' },
                                    { label: 'Case Accessories', url: './shop' },
                                    { label: 'Controller Panels', url: './shop' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Sound Cards', url: './shop', items: [
                                    { label: 'Sound Cards', url: './shop' },
                                    { label: 'Sound Card Accessories', url: './shop' },
                                ]
                            },
                            {
                                label: 'Cables', url: './shop', items: [
                                    { label: 'Audio / Video Cables', url: './shop' },
                                    { label: 'Network Cables', url: './shop' },
                                    { label: 'Computer Cables', url: './shop' },
                                    { label: 'Computer Power Cables', url: './shop' },
                                    { label: 'Computer Video Cables', url: './shop' },
                                    { label: 'KVM Cables', url: './shop' },
                                ]
                            }


                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Networking   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Networking', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Servers & Workstations   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Servers & Workstations', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Computer Peripherals   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Computer Peripherals', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   POS & Digital Signage   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'POS & Digital Signage', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Electronics   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Electronics', url: './shop', menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Office Solutions   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Office Solutions', url: './shop', menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
          // /**********/////////////////*/*/*/////////////////*/*/*/   Software   ///////////////////////*//*////////////////////////*/*//*////////////////// */
          {
            label: 'Software', url: './shop', menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop', items: [
                                    { label: 'Screwdrivers', url: './shop' },
                                    { label: 'Handsaws', url: './shop' },
                                    { label: 'Knives', url: './shop' },
                                    { label: 'Axes', url: './shop' },
                                    { label: 'Multitools', url: './shop' },
                                    { label: 'Paint Tools', url: './shop' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop', items: [
                                    { label: 'Motor Pumps', url: './shop' },
                                    { label: 'Chainsaws', url: './shop' },
                                    { label: 'Electric Saws', url: './shop' },
                                    { label: 'Brush Cutters', url: './shop' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

    ];

