const products = [
  {
    id: 1,
    name: "Men White Long-sleeved Shirt",
    price: {
      offer: true,
      current: 45.99,
      last: 65.99,
    },
    description: {
      short: "Classic long-sleeved shirt for men on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 2,
    name: "Men Dark Blue Long-sleeved Shirt",
    price: {
      offer: false,
      current: 56.97,
      last: 0.0,
    },
    description: {
      short:
        "Classic long-sleeved shirt for men with a love for pandas. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-2.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 3,
    name: "Men White Long-sleeved Funny Shirt",
    price: {
      offer: true,
      current: 37.99,
      last: 65.5,
    },
    description: {
      short: "Classic long-sleeved shirt for men on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-3.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 4,
    name: "Men Black T-Shirt",
    price: {
      offer: false,
      current: 47.0,
      last: 0.0,
    },
    description: {
      short: "Classic long-sleeved shirt for men on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-4.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 5,
    name: "Women purple T-Shirt",
    price: {
      offer: true,
      current: 19.99,
      last: 37.0,
    },
    description: {
      short: "Classic t-shirt for women on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-5.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 6,
    name: "Women Black T-Shirt",
    price: {
      offer: false,
      current: 24.99,
      last: 0.0,
    },
    description: {
      short: "Classic t-shirt for women on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-6.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 7,
    name: "Women Pink T-Shirt",
    price: {
      offer: false,
      current: 29.99,
      last: 0.0,
    },
    description: {
      short: "Classic t-shirt for women on the move. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-7.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
  {
    id: 8,
    name: "Women Red T-Shirt",
    price: {
      offer: true,
      current: 36.99,
      last: 45.5,
    },
    description: {
      short: "Classic t-shirt for women with a favour for dogs. 100% cotton.",
      middle:
        "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
      long: {
        title: "Nunc Egestas Posuere Enim, Eu Maximus Erat Posuere Eget",
        paragraphs: [
          "Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.",
          "Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.",
        ],
      },
      properties: [
        "Elasticated cuffs",
        "Casual Fit",
        "100% Cotton",
        "Free shipping with 4 days delivery",
      ],
    },
    image: {
      all: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.2.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.3.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.4.jpg",
      ],
      thumbnails: [
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.1.jpg",
        "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-8.3.jpg",
      ],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "#499577",
  },
];

const getProducts = (req, res) => {
  const { page, sort } = req.query;
  const productsPerSite = 6;
  const maxIndex = page * productsPerSite - 1;
  const minIndex = maxIndex - (productsPerSite - 1);
  let sortedProducts = [];

  if (sort === "offers") {
    sortedProducts = products.filter((p) => p.price.offer === true);
    sortedProducts = sortedProducts.sort((p1, p2) => {
      return p1.price.current - p2.price.current;
    });
  }

  if (sort === "plth") {
    sortedProducts = products.sort((p1, p2) => {
      return p1.price.current - p2.price.current;
    });
  }

  if (sort === "phtl") {
    sortedProducts = products.sort((p1, p2) => {
      return p2.price.current - p1.price.current;
    });
  }

  const filteredProducts = sortedProducts.filter(
    (p, index) => index >= minIndex && index <= maxIndex
  );

  const pageCount =
    sortedProducts.length > filteredProducts.length
      ? Math.ceil(products.length / productsPerSite)
      : Math.ceil(filteredProducts.length / productsPerSite);

  if (filteredProducts.length > 0) {
    res.status(200).json({
      success: true,
      data: filteredProducts,
      pageCount: pageCount,
    });
  } else {
    res.status(400).json({
      success: false,
      data: filteredProducts,
      error: "No products were found.",
      pageCount: pageCount,
    });
  }
};

const getProductById = (req, res) => {
  const { productId } = req.params;

  const product = products.filter((p) => p.id == productId);

  if (product.length === 0) {
    return res.status(400).json({
      success: false,
      data: product,
      error: "No product found.",
    });
  }

  res.status(200).json({
    success: true,
    data: product[0],
  });
};

module.exports = {
  getProducts,
  getProductById,
};
