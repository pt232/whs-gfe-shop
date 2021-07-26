const lookbooks = [
  {
    id: 1,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Janines Summer Dress",
    price: 19.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 6,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 7,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 8,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 9,
    name: "Janines Summer Dress",
    price: 9.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
  {
    id: 10,
    name: "Janines Summer Dress",
    price: 89.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/products/product-1.1.jpg",
    publish: true,
    createdAt: new Date(),
  },
];
let userLookbook = {};

const getLookbooks = (req, res) => {
  const { page, sort } = req.query;
  const lookbooksPerSite = 7;
  const maxIndex = page * lookbooksPerSite - 1;
  const minIndex = maxIndex - (lookbooksPerSite - 1);
  const pageCount = Math.ceil(lookbooks.length / lookbooksPerSite);
  let sortedLookbooks = [];

  if (sort === "latest") {
    sortedLookbooks = lookbooks.sort((l1, l2) => {
      return l1.createdAt.getTime() - l2.createdAt.getTime();
    });
  }

  if (sort === "plth") {
    sortedLookbooks = lookbooks.sort((l1, l2) => {
      return l1.price - l2.price;
    });
  }

  if (sort === "phtl") {
    sortedLookbooks = lookbooks.sort((l1, l2) => {
      return l2.price - l1.price;
    });
  }

  if (Object.keys(userLookbook).length > 0) {
    sortedLookbooks.unshift(userLookbook);
  }

  const filteredLookbooks = sortedLookbooks.filter(
    (l, index) => index >= minIndex && index <= maxIndex
  );

  if (filteredLookbooks.length > 0) {
    res.status(200).json({
      success: true,
      data: filteredLookbooks,
      pageCount: pageCount,
    });
  } else {
    res.status(400).json({
      success: false,
      data: filteredLookbooks,
      error: "No lookbooks were found.",
      pageCount: pageCount,
    });
  }
};

const getUserLookbook = (req, res) => {
  if (Object.keys(userLookbook).length > 0) {
    res.status(200).json({
      success: true,
      data: userLookbook,
    });
  } else {
    res.status(400).json({
      success: false,
      data: userLookbook,
      error: "No user lookbok exists.",
    });
  }
};

const createUserLookbook = (req, res) => {
  const { title, price, description, image, publish } = req.body;
  const id = lookbooks[lookbooks.length - 1].id + 1;

  userLookbook = {
    id: id,
    name: title,
    price: price,
    description: description,
    image: image,
    publish: publish,
    createdAt: new Date(),
  };

  res.status(200).json({
    success: true,
    data: userLookbook,
  });
};

module.exports = {
  getLookbooks,
  getUserLookbook,
  createUserLookbook,
};
