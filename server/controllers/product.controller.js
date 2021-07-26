const products = [
  {
    id: 1,
    name: "T-Shirt 1",
    price: {
      offer: true,
      current: 0.0,
      last: 0.0,
    },
    description: {
      short: "",
      middle: "",
      long: {
        title: "",
        paragraphs: [""],
      },
      properties: [""],
    },
    image: {
      main: "",
      all: [""],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "",
  },
  {
    id: 2,
    name: "T-Shirt 2",
    price: {
      offer: false,
      current: 0.0,
      last: 0.0,
    },
    description: {
      short: "",
      middle: "",
      long: {
        title: "",
        paragraphs: [""],
      },
      properties: [""],
    },
    image: {
      main: "",
      all: [""],
    },
    reviews: {
      count: 3,
      average: 4,
    },
    availability: true,
    productCode: "",
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

  res.status(200).json({
    success: true,
    data: filteredProducts,
    totalCount: products.length,
  });
};

const getProductById = (req, res) => {
  const { productId } = req.params;

  const product = products.filter((p) => p.id == productId);

  res.status(200).json({
    success: true,
    data: product,
  });
};

module.exports = {
  getProducts,
  getProductById,
};
