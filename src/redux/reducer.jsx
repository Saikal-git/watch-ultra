const initialState = {
  shopProduct: [
    {
      id: 1,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 4000,
      countInStock: 2,
      rating: 4,
      image:
        "https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg",
    },
    {
      id: 2,
      title: "The Select Moscow ",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 3300,
      countInStock: 2,
      rating: 3,
      image:
        "https://static.markformelle.uz/site/master/catalog/574403/desktop/card/6678118.webp",
    },
    {
      id: 3,
      title: "A-A Awesome Apparel ",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 7000,
      countInStock: 2,
      rating: 5,
      image:
        "https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg",
    },
    {
      id: 4,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 4400,
      countInStock: 2,
      rating: 2,
      image:
        "https://static.markformelle.uz/site/master/catalog/592430/desktop/card/6702152.webp",
    },
    {
      id: 5,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 3000,
      countInStock: 2,
      rating: 1,
      image:
        "https://static.markformelle.uz/site/master/catalog/591102/desktop/card/6702292.webp",
    },
    {
      id: 6,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 3090,
      countInStock: 2,
      rating: 3,
      image:
        "https://static.markformelle.uz/site/master/catalog/591096/desktop/card/6700062.webp",
    },
    {
      id: 7,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 3900,
      countInStock: 2,
      rating: 4,
      image:
        "https://static.markformelle.uz/site/master/catalog/554532/desktop/card/6644045.webp",
    },
    {
      id: 8,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 2900,
      countInStock: 2,
      rating: 4,
      image:
        "https://static.markformelle.uz/site/master/catalog/550706/desktop/card/6637966.webp",
    },
  ],
  productDetails: JSON.parse(localStorage.getItem("productDetails")) || {},
  search: JSON.parse(localStorage.getItem("search")) || "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAILS_PRODUCT":
      localStorage.setItem("productDetails", JSON.stringify(action.payload));
      return { ...state, productDetails: action.payload };
    case "SEARCH_PRODUCT":
      const serachProduct = state.shopProduct.filter(
        (el) =>
          el.title.toUpperCase().trim() === action.payload.toUpperCase().trim()
      );
      localStorage.setItem("search", JSON.stringify(serachProduct));
      return { ...state, search: serachProduct };
    default:
      return state;
  }
};
