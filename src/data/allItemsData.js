const allItems = [
  {
    name: "menu.categories.tandoor.item1.name",
    desc: "menu.categories.tandoor.item1.desc",
    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_5aa9c66a4b824310992df0779fc0d36b~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.tandoor.item2.name",
    desc: "menu.categories.tandoor.item2.desc",

    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_349bf4b5bb0b4c819e3620e0b8288dfb~mv2.jpg",
    price: 750,
  },
  {
    name: "menu.categories.tandoor.item3.name",
    desc: "menu.categories.tandoor.item3.desc",

    category: "menu.categories.tandoor.heading",
    image: "/menu/tandoor3.jpg",
    price: 790,
  },
  {
    name: "menu.categories.tandoor.item4.name",
    desc: "menu.categories.tandoor.item4.desc",

    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_c8387284efac47d9b15383cf3ad55ebf~mv2.jpg",
    price: 690,
  },
  {
    name: "menu.categories.tandoor.item5.name",
    desc: "menu.categories.tandoor.item5.desc",

    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_a8ce560ff2654a7d8e085d8839cda5c5~mv2.jpg",
    price: 890,
  },
  {
    name: "menu.categories.tandoor.item6.name",
    desc: "menu.categories.tandoor.item6.desc",

    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_3d9d0f6529b94245968784bef14f4972~mv2.jpg",
    price: 790,
  },
  {
    name: "menu.categories.tandoor.item7.name",
    desc: "menu.categories.tandoor.item7.desc",

    category: "menu.categories.tandoor.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_76c923d016e6436f843b18262ab00221~mv2.jpg",
    price: 950,
  },
  {
    name: "menu.categories.tandoor.item8",

    category: "menu.categories.tandoor.heading",
    image: "/menu/tandoor8.jpg",
    price: 890,
  },

  // Snacks
  {
    name: "menu.categories.snacks.item1.name",
    desc: "menu.categories.snacks.item1.desc",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_298758b168d84391b683ec0a57673560~mv2.jpg",
    price: 390,
  },
  {
    name: "menu.categories.snacks.item2.name",
    desc: "menu.categories.snacks.item2.desc",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_c73e09458f3f469fb0cbfeb10b4d0e0c~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.snacks.item3",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_bcf8e68e97824971857dd7ae77e9d6ae~mv2.jpg",
    price: 550,
  },
  {
    name: "menu.categories.snacks.item4",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_accfe75f58424a4f8596a6e269082f3f~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.snacks.item5.name",
    desc: "menu.categories.snacks.item5.desc",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_177004cd8c9d49fd8baba4c4331a7893~mv2.jpg",
    price: 390,
  },
  {
    name: "menu.categories.snacks.item6.name",
    desc: "menu.categories.snacks.item6.desc",
    category: "menu.categories.snacks.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_496bec4c00fd4d79abdee6d9cf0b00c0~mv2.jpg",
    price: 390,
  },
  {
    name: "menu.categories.snacks.item7.name",
    desc: "menu.categories.snacks.item7.desc",
    category: "menu.categories.snacks.heading",
    image: "/menu/snack7.jpg",

    price: 590,
  },
  {
    name: "menu.categories.snacks.item8.name",
    desc: "menu.categories.snacks.item8.desc",
    category: "menu.categories.snacks.heading",
    image: "/menu/snack8.jpg",
    price: 590,
  },

  // Veg
  {
    name: "menu.categories.veg.item1.name",
    desc: "menu.categories.veg.item1.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_50568d18f0cf4722879bfb59c981e8e9~mv2.jpg",
    price: 550,
  },
  {
    name: "menu.categories.veg.item2.name",
    desc: "menu.categories.veg.item2.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_390bd97612364e54a6f6b0347a8381e7~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.veg.item3.name",
    desc: "menu.categories.veg.item3.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_5e9f2d28973f4e808b361cee272ae913~mv2.jpg",
    price: 570,
  },
  {
    name: "menu.categories.veg.item4.name",
    desc: "menu.categories.veg.item4.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_6a547529a9274a3abaef2b49dab5d7bf~mv2.jpg",
    price: 490,
  },
  {
    name: "menu.categories.veg.item5.name",
    desc: "menu.categories.veg.item5.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_0e51a13b1de84b5f842666be98a83e32~mv2.jpg",
    price: 570,
  },
  {
    name: "menu.categories.veg.item6.name",
    desc: "menu.categories.veg.item6.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_65f1b5422dd34b47b606e38cc42acf6c~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.veg.item7.name",
    desc: "menu.categories.veg.item7.desc",
    category: "menu.categories.veg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_750ac0f99e9d4cc7abefb0cc3eee1819~mv2.jpg",
    price: 550,
  },
  {
    name: "menu.categories.veg.item8",
    category: "menu.categories.veg.heading",
    image: "/menu/veg8.jpg",
    price: 590,
  },
  {
    name: "menu.categories.veg.item9",
    category: "menu.categories.veg.heading",
    image: "/menu/veg9.jpg",
    price: 590,
  },
  {
    name: "menu.categories.veg.item10",
    category: "menu.categories.veg.heading",
    image: "/menu/veg10.jpg",
    price: 570,
  },
  {
    name: "menu.categories.veg.item11",
    category: "menu.categories.veg.heading",
    image: "/menu/veg11.jpg",
    price: 590,
  },

  //biryani
  {
    name: "menu.categories.biryani.item1",
    category: "menu.categories.biryani.heading",
    image: "/menu/biryani1.jpg",
    price: 750,
  },
  {
    name: "menu.categories.biryani.item2",
    category: "menu.categories.biryani.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_5841e455c862446394686368ed716a11~mv2.jpg",
    price: 720,
  },
  {
    name: "menu.categories.biryani.item3",
    category: "menu.categories.biryani.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_d1de80f3cb94404ebbd19bcc8ccfa16a~mv2.jpg",
    price: 790,
  },
  {
    name: "menu.categories.biryani.item4",
    category: "menu.categories.biryani.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_08259876a7af4f8aa0287e956caeb6b8~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.biryani.item5",
    category: "menu.categories.biryani.heading",
    image: "/menu/biryani5.jpg",
    price: 250,
  },

  //salads
  {
    name: "menu.categories.salads.item1",
    category: "menu.categories.salads.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_cc8d7abd1c714d3691e5e56e67210b7b~mv2.jpg",
    price: 330,
  },
  {
    name: "menu.categories.salads.item2",
    category: "menu.categories.salads.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_7065aa6e45914261b964195071c32dca~mv2.jpg",
    price: 390,
  },
  {
    name: "menu.categories.salads.item3",
    category: "menu.categories.salads.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_a21a64955daf412ea9eb5333342bef0c~mv2.jpg",
    price: 480,
  },
  {
    name: "menu.categories.salads.item4",
    category: "menu.categories.salads.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_7945968945a94a81bc2a1764a19d79ac~mv2.jpg",
    price: 550,
  },
  {
    name: "menu.categories.salads.item5",
    category: "menu.categories.salads.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_b5642265869e46228b9a63d49043d7a4~mv2.jpg",
    price: 350,
  },

  //soups
  {
    name: "menu.categories.soups.item1.name",
    desc: "menu.categories.soups.item1.desc",
    category: "menu.categories.soups.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_c28aafc0d28e405f93983c9fe4424d63~mv2.jpg",
    price: 350,
  },
  {
    name: "menu.categories.soups.item2",
    category: "menu.categories.soups.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_8474905862984f73aed0a71d2fb654a8~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.soups.item3",
    category: "menu.categories.soups.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_ad52b7a703a8454987004663b8a25be0~mv2.jpg",
    price: 590,
  },
  {
    name: "menu.categories.soups.item4",
    category: "menu.categories.soups.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_c7f4fa2ea540402384202159841cb781~mv2.jpg",
    price: 350,
  },

  //nonveg
  {
    name: "menu.categories.nonveg.item1.name",
    desc: "menu.categories.nonveg.item1.desc",
    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_a2d01a3d9991448897822dcb7769eb80~mv2.jpg",
    price: 790,
  },
  {
    name: "menu.categories.nonveg.item2.name",
    desc: "menu.categories.nonveg.item2.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_e0cc2c1ec3b54fd4b807d3236a19b1b9~mv2.jpg",
    price: 770,
  },
  {
    name: "menu.categories.nonveg.item3.name",
    desc: "menu.categories.nonveg.item3.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_5654a5bc5ce945a890c662e9fee3206e~mv2.jpg",
    price: 790,
  },
  {
    name: "menu.categories.nonveg.item4.name",
    desc: "menu.categories.nonveg.item4.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_0b6585bdbeca49d6abc24f1f0e77b52c~mv2.jpg",
    price: 690,
  },
  {
    name: "menu.categories.nonveg.item5.name",
    desc: "menu.categories.nonveg.item5.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_cce6970703334f3e806752ec5e4b1f3f~mv2.jpg",
    price: 690,
  },
  {
    name: "menu.categories.nonveg.item6.name",
    desc: "menu.categories.nonveg.item6.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_7f27db67a2694efb86f11544652c7b72~mv2.jpg",
    price: 720,
  },
  {
    name: "menu.categories.nonveg.item7.name",
    desc: "menu.categories.nonveg.item7.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_cbf94f4e070b4ec88a29df377dfb1695~mv2.jpg",
    price: 650,
  },
  {
    name: "menu.categories.nonveg.item8.name",
    desc: "menu.categories.nonveg.item8.desc",

    category: "menu.categories.nonveg.heading",
    image: "/menu/nonveg8.jpg",
    price: 750,
  },
  {
    name: "menu.categories.nonveg.item9.name",
    desc: "menu.categories.nonveg.item9.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_f95bc9c184174d1fa792c02d47a75c96~mv2.jpg",
    price: 790,
  },
  {
    name: "menu.categories.nonveg.item10.name",
    desc: "menu.categories.nonveg.item10.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_4fd1d0b72bee4b139c436703179e8d81~mv2.jpg",
    price: 820,
  },
  {
    name: "menu.categories.nonveg.item11.name",
    desc: "menu.categories.nonveg.item11.desc",

    category: "menu.categories.nonveg.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_36feca4fd0f445cc8bc9551275f60ec0~mv2.jpg",
    price: 690,
  },
  // {
  //   name: "menu.categories.nonveg.item12",

  //   category: "menu.categories.nonveg.heading",
  //   image: "/menu/nonveg12.jpg",
  //   price: 750,
  // },
  {
    name: "menu.categories.nonveg.item13",

    category: "menu.categories.nonveg.heading",
    image: "/menu/nonveg13.jpg",
    price: 690,
  },
  {
    name: "menu.categories.nonveg.item14",

    category: "menu.categories.nonveg.heading",
    image: "/menu/nonveg14.jpg",
    price: 690,
  },

  //sides

  {
    name: "menu.categories.sides.item1",
    category: "menu.categories.sides.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_ce54de88e7d8420d9bac8dd14886edfe~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.sides.item2",
    category: "menu.categories.sides.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_842b0f5b24a743f7a7fe6750330e58ad~mv2.jpg",
    price: 220,
  },
  {
    name: "menu.categories.sides.item3",
    category: "menu.categories.sides.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_5e81041ec9b7480a9bc9530b5d39ed24~mv2.jpg",
    price: 170,
  },
  {
    name: "menu.categories.sides.item4",
    category: "menu.categories.sides.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_a195916c8b1a455fa47d582c88edc46d~mv2.jpg",
    price: 190,
  },

  //naan

  {
    name: "menu.categories.naan.item1",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_fd74b822faae48279d0b0823b50a1d7a~mv2.jpg",
    price: 190,
  },
  {
    name: "menu.categories.naan.item2",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_b4b1ce3e3d114bea9a586ba5bd5d8456~mv2.jpg",
    price: 230,
  },
  {
    name: "menu.categories.naan.item3",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_ffe67a973ae34fdbad933b75a091905e~mv2.jpg",
    price: 230,
  },
  {
    name: "menu.categories.naan.item4",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_fd74b822faae48279d0b0823b50a1d7a~mv2.jpg",
    price: 230,
  },
  {
    name: "menu.categories.naan.item5",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_b4b1ce3e3d114bea9a586ba5bd5d8456~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.naan.item6",
    category: "menu.categories.naan.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_ffe67a973ae34fdbad933b75a091905e~mv2.jpg",
    price: 250,
  },

  //cold

  {
    name: "menu.categories.cold.item1",
    category: "menu.categories.cold.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_f11e3c3bd3944191a296bfb99e36e4ab~mv2.jpg",
    price: "390/490",
  },
  {
    name: "menu.categories.cold.item2",
    category: "menu.categories.cold.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_d787639456c2486abd4c6f2c06a25907~mv2.jpg",
    price: "390/490",
  },
  {
    name: "menu.categories.cold.item3",
    category: "menu.categories.cold.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_d88f6e190c4445ffb817720bf52de8a2~mv2.jpg",
    price: "300/350",
  },
  {
    name: "menu.categories.cold.item4",
    category: "menu.categories.cold.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_f11e3c3bd3944191a296bfb99e36e4ab~mv2.jpg",
    price: "350/450",
  },

  //tea

  {
    name: "menu.categories.tea.item1",
    category: "menu.categories.tea.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_c49e282286794808bba7c9af3fdb0541~mv2.jpg",
    price: "250/550",
  },
  {
    name: "menu.categories.tea.item2",
    category: "menu.categories.tea.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_522841bf96e74a68a9815be85474d2e0~mv2.jpg",
    price: "190/450",
  },
  {
    name: "menu.categories.tea.item3",
    category: "menu.categories.tea.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_522841bf96e74a68a9815be85474d2e0~mv2.jpg",
    price: "190/450",
  },
  {
    name: "menu.categories.tea.item4",
    category: "menu.categories.tea.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_522841bf96e74a68a9815be85474d2e0~mv2.jpg",
    price: "190/450",
  },

  //desserts

  {
    name: "menu.categories.desserts.item1",
    category: "menu.categories.desserts.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_60d2e0c503b84fc6a49c29e123ca132e~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.desserts.item2",
    category: "menu.categories.desserts.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_2aca55e36d814f1a9b8225776d7cdfb8~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.desserts.item3",
    category: "menu.categories.desserts.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_1f782dae5ba54bafaa9dec8b22cada9c~mv2.jpg",
    price: 250,
  },
  {
    name: "menu.categories.desserts.item4.name",
    desc: "menu.categories.desserts.item4.desc",
    category: "menu.categories.desserts.heading",
    image: "/menu/dessert4.jpg",
    price: 350,
  },

  //thali

  {
    name: "menu.categories.thali.item1",
    category: "menu.categories.thali.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_33255e335df04b01938721d0c5b001ff~mv2.jpg",
    price: 2490,
  },
  {
    name: "menu.categories.thali.item2",
    category: "menu.categories.thali.heading",
    image:
      "https://static.wixstatic.com/media/df6cc5_1cf80df2c2a74b96a3b20157fbca571e~mv2.jpg",
    price: 2190,
  },

  //noodles
  {
    name: "menu.categories.noodles.item1",
    category: "menu.categories.noodles.heading",
    image: "/menu/noodles2.jpg",
    price: 550,
  },
  {
    name: "menu.categories.noodles.item2",
    category: "menu.categories.noodles.heading",
    image: "/menu/noodles1.jpg",
    price: 590,
  },
];

export default allItems;
