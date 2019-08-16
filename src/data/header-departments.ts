import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const departments: NavigationLink[] =
    [

        // /**********/////////////////*/*/*/////////////////*/*/*/   Computer Hardware   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Computer Hardware', url: './process/categoryview', Id: 1, menu: {
                type: 'megamenu',
                size: 'xl',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [

                            {
                                Id: 1,
                                label: 'CPUs/ Processors',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 602,
                                        label: 'Desktop Processors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 603,
                                        label: 'Server Processors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 604,
                                        label: 'Mobile Processors',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 2,
                                label: 'Motherboards',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 605,
                                        label: 'Intel Motherboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 606,
                                        label: 'AMD Motherboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 607,
                                        label: 'Server Motherboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 608,
                                        label: 'Embedded Solutions',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 609,
                                        label: 'Development Boards',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 3,
                                label: 'Memory',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 610,
                                        label: 'Desktop Memory',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 611,
                                        label: 'Laptop Memory',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 612,
                                        label: 'Server Memory',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 613,
                                        label: 'System Specific Memory',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 614,
                                        label: 'Mac Memory',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 7,
                                label: 'Power  Supplies',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 624,
                                        label: 'Power Supplies',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 625,
                                        label: 'Server Power Supplies',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                Id: 4,
                                label: 'Video Cards & Video Devices',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 615,
                                        label: 'Desktop Graphics Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 616,
                                        label: 'Workstation Graphics Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 617,
                                        label: 'Video Devices & TV Tuners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 618,
                                        label: 'Video Card Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 5,
                                label: 'Computer Cases',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 619,
                                        label: 'Computer Cases',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 620,
                                        label: 'Server  Chassis',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 621,
                                        label: 'HTPC / Media Center Cases',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },

                            {
                                Id: 11,
                                label: 'Fans & PC Cooling',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 642,
                                        label: 'CPU Fans &Heatsinks',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 643,
                                        label: 'Case Fans',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 644,
                                        label: 'Water / Liquid Cooling',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 645,
                                        label: 'Hard Drive Cooling',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 646,
                                        label: 'Memory & Chipset Cooling',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 647,
                                        label: 'VGA  Cooling',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                Id: 9,
                                label: 'Computer Accessories',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 628,
                                        label: 'PC Tools &amp; Testers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 629,
                                        label: 'Hard Drive Enclosures',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 630,
                                        label: 'Add-On  Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 631,
                                        label: 'SSD/HDD Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 632,
                                        label: 'Card  Readers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 633,
                                        label: 'Adapters &amp; Gender Changers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 634,
                                        label: 'Case Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 635,
                                        label: 'Controller Panels',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                Id: 8,
                                label: 'Sound Cards',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 626,
                                        label: 'Sound Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 627,
                                        label: 'Sound Card Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 10,
                                label: 'Cables',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 636,
                                        label: 'Audio / Video Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 637,
                                        label: 'Network Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 638,
                                        label: 'Computer Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 639,
                                        label: 'Computer Power Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 640,
                                        label: 'Computer Video Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 641,
                                        label: 'KVM Cables',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }


                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   PCs & Laptops   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'PCs & Laptops', url: './process/categoryview', Id: 2, menu: {
                type: 'megamenu',
                size: 'lg',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [
                            {
                                Id: 13,
                                label: 'Desktop Computers',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 652,
                                        label: 'Desktop Computers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 653,
                                        label: 'All-in-One Computers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 654,
                                        label: 'Gaming Desktops',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 655,
                                        label: 'Business Desktops & Workstations',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 656,
                                        label: 'Refurbished Desktops',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 657,
                                        label: 'Barebone / Mini Computers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 658,
                                        label: 'Barebone   PCs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 659,
                                        label: 'Mini-PC Barebone',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    }, {
                        size: 3, items: [
                            {
                                Id: 14,
                                label: 'Laptops / Notebooks',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 660,
                                        label: 'Laptops/Notebooks',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 661,
                                        label: 'Gaming Laptops',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 662,
                                        label: '2-in-1 Laptops',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 663,
                                        label: 'Mobile Workstations',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 664,
                                        label: 'Chromebooks',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 665,
                                        label: 'Laptop Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 666,
                                        label: 'Refurbished Laptops',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]
                    }

                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   PCs & Laptops   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Data Storage', url: './process/categoryview', Id: 3, menu: {
                type: 'megamenu',
                size: 'xl',
                image: 'assets/images/megamenu/megamenu-2.jpg',
                columns: [
                    {
                        size: 3, items: [


                            {
                                Id: 16,
                                label: 'Internal Hard Drives',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 674,
                                        label: 'Desktop Internal Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 675,
                                        label: 'Laptop Internal Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 676,
                                        label: 'Enterprise Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 677,
                                        label: 'Surveillance Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 678,
                                        label: 'NAS Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 679,
                                        label: 'Hybrid Hard Drives',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 17,
                                label: 'External Hard Drives',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 680,
                                        label: 'Desktop External Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 681,
                                        label: 'Portable External Hard Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 682,
                                        label: 'Hard Drive Enclosures',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 18,
                                label: 'Optical Disc Drives',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 683,
                                        label: 'CD/DVD Burners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 684,
                                        label: 'Blu-Ray Burners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 685,
                                        label: 'External CD/DVD/Blu-Ray Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 686,
                                        label: 'Blu-Ray Drives',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 19,
                                label: 'Backup Devices & Media',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 687,
                                        label: 'Backup Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 688,
                                        label: 'Backup Media',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 689,
                                        label: 'Floppy Drives',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [



                            {
                                Id: 20,
                                label: 'Solid State Drives',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 690,
                                        label: 'Enterprise SSDs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 691,
                                        label: 'Internal SSDs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 692,
                                        label: 'External SSDs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 693,
                                        label: 'SSD / HDD Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 694,
                                        label: 'Refurbished SSDs',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 21,
                                label: 'Network Attached Storage (NAS)',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 695,
                                        label: 'Rackmount NAS',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 696,
                                        label: 'Desktop  NAS',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 697,
                                        label: 'RAID Enclosure / Subsystems',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 22,
                                label: 'USB Flash Drives & Memory Cards',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 698,
                                        label: 'USB Flash Drives',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 699,
                                        label: 'Memory Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 700,
                                        label: 'Card Readers',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }


                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Computer Accessories', url: './shop/productsearchlevels', items: [
                                    { label: 'PC Tools &; Testers', url: './shop/productsearchlevels' },
                                    { label: 'Hard Drive Enclosures', url: './shop/productsearchlevels' },
                                    { label: 'Add-On  Cards', url: './shop/productsearchlevels' },
                                    { label: 'SSD / HDD Accessories', url: './shop/productsearchlevels' },
                                    { label: 'Card  Readers', url: './shop/productsearchlevels' },
                                    { label: 'Adapters &; Gender Changers', url: './shop/productsearchlevels' },
                                    { label: 'Case Accessories', url: './shop/productsearchlevels' },
                                    { label: 'Controller Panels', url: './shop/productsearchlevels' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3, items: [
                            {
                                label: 'Sound Cards', url: './shop/productsearchlevels', items: [
                                    { label: 'Sound Cards', url: './shop/productsearchlevels' },
                                    { label: 'Sound Card Accessories', url: './shop/productsearchlevels' },
                                ]
                            },
                            {
                                label: 'Cables', url: './shop/productsearchlevels', items: [
                                    { label: 'Audio / Video Cables', url: './shop/productsearchlevels' },
                                    { label: 'Network Cables', url: './shop/productsearchlevels' },
                                    { label: 'Computer Cables', url: './shop/productsearchlevels' },
                                    { label: 'Computer Power Cables', url: './shop/productsearchlevels' },
                                    { label: 'Computer Video Cables', url: './shop/productsearchlevels' },
                                    { label: 'KVM Cables', url: './shop/productsearchlevels' },
                                ]
                            }


                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Networking   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Networking', url: './process/categoryview', Id: 4, menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 4, items: [

                            {
                                Id: 24,
                                label: 'Routers & Access Points',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 707,
                                        label: 'Wired Routers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 708,
                                        label: 'Wireless Routers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 709,
                                        label: 'Wireless AP',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 710,
                                        label: 'Wireless Range Extender / Media Bridge',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 25,
                                label: 'Network Attached Storage (NAS)',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 711,
                                        label: 'Rackmount NAS',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 712,
                                        label: 'Desktop NAS',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 713,
                                        label: 'RAID Enclosure / Subsystems',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 26,
                                label: 'Network Accessories',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 714,
                                        label: 'Network Ethernet Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 715,
                                        label: 'Network Antennas',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 716,
                                        label: 'Network Transceivers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 717,
                                        label: 'Wired Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 718,
                                        label: 'Wireless Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }, {
                                Id: 31,
                                label: 'Firewalls / Security Appliances',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 735,
                                        label: 'Wired',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 736,
                                        label: 'Wireless',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }



                        ]
                    },
                    {
                        size: 4, items: [

                            {
                                Id: 28,
                                label: 'Switches & Hubs',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 724,
                                        label: 'Switches',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 725,
                                        label: 'Hubs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 726,
                                        label: 'Switch Modules',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 727,
                                        label: 'KVM Switches',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 29,
                                label: 'Modems / Gateways',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 728,
                                        label: 'Cable Modems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 729,
                                        label: 'Gateway Modems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 730,
                                        label: 'DSL Modems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 731,
                                        label: 'Modem Router Combo',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 30,
                                label: 'Network Adapters',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 732,
                                        label: 'Network Interface Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 733,
                                        label: 'Wireless Adapters',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 734,
                                        label: 'Bluetooth Adapters',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 27,
                                label: 'Security Cameras & Surveillance',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 719,
                                        label: 'Surveillance Security Systems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 720,
                                        label: 'IP / Network Cameras',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 721,
                                        label: 'CCTV / Analog Cameras',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 722,
                                        label: 'Video Recorders',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 723,
                                        label: 'Surveillance Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]

                    },
                    {
                        size: 4, items: [

                            {
                                Id: 32,
                                label: 'Cables',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 737,
                                        label: 'Audio / Video Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 738,
                                        label: 'Network                            Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 739,
                                        label: 'Computer Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 740,
                                        label: 'Computer Power Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 741,
                                        label: 'Computer Video Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 742,
                                        label: 'KVM Cables',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    }


                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Servers & Workstations   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Servers & Workstations', url: './process/categoryview', Id: 5, menu: {
                type: 'megamenu',
                size: 'sm',
                columns: [
                    {
                        size: 12, items: [
                            {
                                Id: 33,
                                label: 'Servers',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 743,
                                        label: 'Server Barebones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 744,
                                        label: 'Thin Client Systems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 745,
                                        label: 'Server Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 746,
                                        label: 'Server Software',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 747,
                                        label: 'RAID Enclosure / Subsystems',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 748,
                                        label: 'Controllers / RAID Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 749,
                                        label: 'Server Motherboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 750,
                                        label: 'Server Chassis',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 751,
                                        label: 'Server Racks / Cabinets',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 752,
                                        label: 'Server Power Supplies',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 753,
                                        label: 'Refurbished Servers &amp; Workstations',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Computer Peripherals   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Computer Peripherals', url: './process/categoryview', Id: 6, menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 4, items: [
                            {
                                Id: 34,
                                label: 'Monitors',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 754,
                                        label: 'LCD/LED Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 755,
                                        label: 'Touch Screen Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 756,
                                        label: 'Curved Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 757,
                                        label: '4K / 2K Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 758,
                                        label: 'UltraWide Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 759,
                                        label: 'Monitor Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 760,
                                        label: 'Refurbished Monitors',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 35,
                                label: 'Printers',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 761,
                                        label: 'Laser Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 762,
                                        label: 'Inkjet Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 763,
                                        label: '3D Printing',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 764,
                                        label: 'Barcode & Label Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 765,
                                        label: 'Dot Matrix Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 766,
                                        label: 'Printer Ink &amp; Toner',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 767,
                                        label: 'Printer Supplies',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 36,
                                label: 'Scanners',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 768,
                                        label: 'Document Scanners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 769,
                                        label: 'Barcode Scanner',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 770,
                                        label: 'Flatbed Scanners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 771,
                                        label: 'Specialized Scanners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 772,
                                        label: 'Scanner Supplies',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]

                    },
                    {
                        size: 3, items: [
                            {
                                Id: 37,
                                label: 'Projectors',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 773,
                                        label: 'Business Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 774,
                                        label: 'Home Theater Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 775,
                                        label: 'LED Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 776,
                                        label: 'PICO / Portable Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 777,
                                        label: 'Projector Screens',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 778,
                                        label: 'Projector Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 38,
                                label: 'Power Management',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 779,
                                        label: 'UPS',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 780,
                                        label: 'UPS Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 781,
                                        label: 'Power Distribution Unit',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 782,
                                        label: 'Power Inverters',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 783,
                                        label: 'Power Strips',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 784,
                                        label: 'Surge Protectors',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 39,
                                label: 'Keyboards & Mice',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 785,
                                        label: 'Mice',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 786,
                                        label: 'Keyboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 787,
                                        label: 'Gaming Keyboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 788,
                                        label: 'Gaming Mice',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 789,
                                        label: 'Mouse Pads &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]

                    },
                    {
                        size: 3, items: [
                            {
                                Id: 40,
                                label: 'Input Devices',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 790,
                                        label: 'Web Cams',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 791,
                                        label: 'KVM Switches',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 792,
                                        label: 'Hubs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 793,
                                        label: 'Microphones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 794,
                                        label: 'Graphics Tablets',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 795,
                                        label: 'Presentation Remotes',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 41,
                                label: 'Headsets, Speakers, & Soundcards',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 796,
                                        label: 'Speakers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 797,
                                        label: 'Headsets &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 798,
                                        label: 'Sound Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 799,
                                        label: 'Microphones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 800,
                                        label: 'Pro Audio &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]
                    }

                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   POS & Digital Signage   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'POS & Digital Signage', url: './process/categoryview', Id: 7, menu: {
                type: 'megamenu',
                size: 'nl',
                columns: [
                    {
                        size: 6, items: [

                            {
                                Id: 42,
                                label: 'Point of Sale',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 801,
                                        label: 'Signature Pads',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 802,
                                        label: 'Receipt Printer',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 803,
                                        label: 'Barcode Scanner',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 804,
                                        label: 'Barcode &amp; Label Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 805,
                                        label: 'Credit Card Reader',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 806,
                                        label: 'Cash  Handling',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 807,
                                        label: 'Point of Sale Monitors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 808,
                                        label: 'POS System',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 43,
                                label: 'POS  Accessories',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 809,
                                        label: 'Mobile Computing',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 810,
                                        label: 'Mobile Scanners',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 811,
                                        label: 'Mobile Receipt Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 812,
                                        label: 'Mobile Barcode &amp; Label Printers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 813,
                                        label: 'Mobile Computing Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }


                        ]
                    },
                    {
                        size: 6, items: [

                            {
                                Id: 44,
                                label: 'Digital Signage',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 814,
                                        label: 'Commercial Displays',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 815,
                                        label: 'Commercial TVs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 816,
                                        label: 'Interactive Digital Signage',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 817,
                                        label: 'Interactive Whiteboards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 818,
                                        label: 'Video   Walls',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 819,
                                        label: 'Digital Signage Kiosk',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 820,
                                        label: 'Hospitality TVs',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 821,
                                        label: 'Digital Signage Media Players',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 822,
                                        label: 'Digital Signage Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Electronics   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Electronics', url: './process/categoryview', Id: 8, menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 4, items: [
                            {
                                Id: 45,
                                label: 'TV &Video',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 823,
                                        label: '4K Ultra HD TV',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 824,
                                        label: 'LED TV',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 825,
                                        label: 'Smart TV',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 826,
                                        label: 'Curved TV',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 827,
                                        label: 'TV Mounts',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 828,
                                        label: 'Home Theater Projectors',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 46,
                                label: 'Home Audio & Home Theater',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 829,
                                        label: 'Receivers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 830,
                                        label: 'Home Theater Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 831,
                                        label: 'Home Audio Speakers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 832,
                                        label: 'Sound Bars',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 833,
                                        label: 'Home Theater in a Box',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 834,
                                        label: 'Audio / Video Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 47,
                                label: 'Headsets, Speakers, & Soundcards',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 835,
                                        label: 'Speakers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 836,
                                        label: 'Headsets &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 837,
                                        label: 'Sound Cards',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 838,
                                        label: 'Microphones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 839,
                                        label: 'Pro Audio &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 48,
                                label: 'Portable Electronic Devices',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 840,
                                        label: 'Headphones &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 841,
                                        label: 'Portable Speakers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 842,
                                        label: 'MP3 / MP4 Players',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 843,
                                        label: 'GPS Navigation',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 844,
                                        label: 'Voice Recorders',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        size: 4, items: [


                            {
                                Id: 49,
                                label: 'Telephones / VoIP',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 845,
                                        label: 'VoIP',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 846,
                                        label: 'Cordless Phones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 847,
                                        label: 'Corded Phones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 848,
                                        label: 'Telephone Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 849,
                                        label: 'Two-Way Radios',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 50,
                                label: 'Tablets',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 850,
                                        label: 'Tablets',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 851,
                                        label: 'iPads',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 852,
                                        label: 'Android Tablets',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 853,
                                        label: 'Windows Tablets',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 854,
                                        label: 'Tablet Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 51,
                                label: 'Projectors',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 855,
                                        label: 'Home Theater Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 856,
                                        label: 'Business Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 857,
                                        label: 'PICO / Portable Projectors',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 858,
                                        label: 'Projector Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 859,
                                        label: 'Projector Screens',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 52,
                                label: 'Appliances',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 860,
                                        label: 'Automatic Coffee Makers',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 861,
                                        label: 'Refrigerators',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 862,
                                        label: 'Microwaves',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 863,
                                        label: 'Small Kitchen Appliances',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 864,
                                        label: 'Water Filtration & Dispensers',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        size: 4, items: [
                            {
                                Id: 53,
                                label: 'Cell Phones & Cell Phone Accessories',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 865,
                                        label: 'Cell Phones - Unlocked',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 866,
                                        label: 'Cell Phones - No Contract &amp; Prepaid',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 867,
                                        label: 'Chargers &amp; Cables',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 868,
                                        label: 'Bluetooth Headsets &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 54,
                                label: 'Gaming',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 869,
                                        label: 'PlayStation',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 870,
                                        label: 'Nintendo',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 871,
                                        label: 'Xbox',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 872,
                                        label: 'Computer Games &amp; Accessories',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 873,
                                        label: 'VR Games',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            },
                            {
                                Id: 55,
                                label: 'Digital Cameras',
                                url: './process/categoryview',
                                items: [
                                    {
                                        Id: 874,
                                        label: 'DSLR Cameras',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 875,
                                        label: 'Point &amp; Shoot Cameras',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 876,
                                        label: 'Drones',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 877,
                                        label: 'Professional Camcorders',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 878,
                                        label: 'Action Cameras',
                                        url: './shop/productsearchlevels'
                                    },
                                    {
                                        Id: 879,
                                        label: 'Digital Camera Accessories',
                                        url: './shop/productsearchlevels'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Office Solutions   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Office Solutions', url: './process/categoryview', Id: 9, menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop/productsearchlevels', items: [
                                    { label: 'Screwdrivers', url: './shop/productsearchlevels' },
                                    { label: 'Handsaws', url: './shop/productsearchlevels' },
                                    { label: 'Knives', url: './shop/productsearchlevels' },
                                    { label: 'Axes', url: './shop/productsearchlevels' },
                                    { label: 'Multitools', url: './shop/productsearchlevels' },
                                    { label: 'Paint Tools', url: './shop/productsearchlevels' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop/productsearchlevels', items: [
                                    { label: 'Motor Pumps', url: './shop/productsearchlevels' },
                                    { label: 'Chainsaws', url: './shop/productsearchlevels' },
                                    { label: 'Electric Saws', url: './shop/productsearchlevels' },
                                    { label: 'Brush Cutters', url: './shop/productsearchlevels' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        // /**********/////////////////*/*/*/////////////////*/*/*/   Software   ///////////////////////*//*////////////////////////*/*//*////////////////// */
        {
            label: 'Software', url: './process/categoryview', Id: 10, menu: {
                type: 'megamenu',
                size: 'xl',
                columns: [
                    {
                        size: 12, items: [
                            {
                                label: 'Hand Tools', url: './shop/productsearchlevels', items: [
                                    { label: 'Screwdrivers', url: './shop/productsearchlevels' },
                                    { label: 'Handsaws', url: './shop/productsearchlevels' },
                                    { label: 'Knives', url: './shop/productsearchlevels' },
                                    { label: 'Axes', url: './shop/productsearchlevels' },
                                    { label: 'Multitools', url: './shop/productsearchlevels' },
                                    { label: 'Paint Tools', url: './shop/productsearchlevels' }
                                ]
                            },
                            {
                                label: 'Garden Equipment', url: './shop/productsearchlevels', items: [
                                    { label: 'Motor Pumps', url: './shop/productsearchlevels' },
                                    { label: 'Chainsaws', url: './shop/productsearchlevels' },
                                    { label: 'Electric Saws', url: './shop/productsearchlevels' },
                                    { label: 'Brush Cutters', url: './shop/productsearchlevels' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

    ];


