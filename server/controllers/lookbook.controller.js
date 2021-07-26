const lookbooks = [
  {
    id: 1,
    name: "Sams Favorite Outfit",
    price: 78.99,
    description: "T-Shirt and Jeans. Simple but effective",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-1.jpg",
    publish: true,
    createdAt: new Date(2021, 1, 15),
  },
  {
    id: 2,
    name: "Best Outfit for a Caravan Trip",
    price: 120,
    description: "Just feels good 😎",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-2.jpg",
    publish: true,
    createdAt: new Date(2021, 3, 24),
  },
  {
    id: 3,
    name: "I like rabbits",
    price: 110.97,
    description: "🐰🐰🐰",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-3.jpg",
    publish: true,
    createdAt: new Date(2021, 5, 8),
  },
  {
    id: 4,
    name: "I'm always hungry",
    price: 69.99,
    description: "I wear that look everytime I eat",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-4.jpg",
    publish: true,
    createdAt: new Date(2021, 2, 17),
  },
  {
    id: 5,
    name: "Perfect for lazy persons",
    price: 49.99,
    description: "I'm jobless but I like this shirt.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-5.jpg",
    publish: true,
    createdAt: new Date(2021, 6, 2),
  },
  {
    id: 6,
    name: "Star Wars Outfit",
    price: 89.99,
    description: "Ready for the next movies",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-6.jpg",
    publish: true,
    createdAt: new Date(2021, 3, 29),
  },
  {
    id: 7,
    name: "Hamburg is my city",
    price: 66.57,
    description: "I live there, you know?",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-7.jpg",
    publish: true,
    createdAt: new Date(2021, 4, 28),
  },
  {
    id: 8,
    name: "Janes Summer Outfit",
    price: 99.99,
    description:
      "My casual summer dress helps me feeling happy. I wear it whenever possible.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-8.jpg",
    publish: true,
    createdAt: new Date(2020, 10, 10),
  },
  {
    id: 9,
    name: "Jackies favourite Outfit",
    price: 59.0,
    description: "I basically wear this everyday.",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-9.jpg",
    publish: true,
    createdAt: new Date(2021, 5, 1),
  },
  {
    id: 10,
    name: "Outfit for learners",
    price: 49.99,
    description: "🤓",
    image:
      "https://raw.githubusercontent.com/pt232/whs-gfe-shop/master/server/images/lookbooks/lookbook-10.jpg",
    publish: true,
    createdAt: new Date(2021, 6, 24),
  },
];
let userLookbook = {};

const getLookbooks = (req, res) => {
  const { page, sort } = req.query;
  const lookbooksPerSite = 7;
  const maxIndex = page * lookbooksPerSite - 1;
  const minIndex = maxIndex - (lookbooksPerSite - 1);
  let sortedLookbooks = [];

  sortedLookbooks = lookbooks.filter((l) => l.publish === true);

  if (sort === "latest") {
    sortedLookbooks = sortedLookbooks.sort((l1, l2) => {
      return l2.createdAt.getTime() - l1.createdAt.getTime();
    });
  }

  if (sort === "plth") {
    sortedLookbooks = sortedLookbooks.sort((l1, l2) => {
      return l1.price - l2.price;
    });
  }

  if (sort === "phtl") {
    sortedLookbooks = sortedLookbooks.sort((l1, l2) => {
      return l2.price - l1.price;
    });
  }

  if (Object.keys(userLookbook).length > 0) {
    if (userLookbook.publish) sortedLookbooks.unshift(userLookbook);
  }

  const filteredLookbooks = sortedLookbooks.filter(
    (l, index) => index >= minIndex && index <= maxIndex
  );

  const pageCount =
    sortedLookbooks.length > filteredLookbooks.length
      ? Math.ceil(lookbooks.length / lookbooksPerSite)
      : Math.ceil(filteredLookbooks.length / lookbooksPerSite);

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
