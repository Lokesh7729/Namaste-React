// const resList = [
//   {
//     id: "1001",
//     name: "KFC",
//     cuisine: ["American", "Fast Food"],
//     rating: 4.5,
//     deliveryTime: "25-35 mins",
//     imageUrl:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/ca51121e-b178-44a4-a623-3c4f0bc02047_807635.JPG",
//     address: "101, MG Road, Indore",
//   },
//   {
//     id: "1002",
//     name: "Domino's Pizza",
//     cuisine: ["Italian", "Pizza"],
//     rating: 4.5,
//     deliveryTime: "30-40 mins",
//     imageUrl:
//       "https://cdn4.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/287629/EDV_microsite_creative_1_jpg.jpg",
//     address: "202, Sapna Sangeeta Road, Indore",
//   },
//   {
//     id: "1003",
//     name: "Subway",
//     cuisine: ["Healthy", "Sandwiches"],
//     rating: 4.0,
//     deliveryTime: "20-30 mins",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QPWixmH6flTFG_3q2O6JfeoQie9Jz-RACw&s",
//     address: "303, Vijay Nagar, Indore",
//   },
//   {
//     id: "1004",
//     name: "Pizza Hut",
//     cuisine: ["Italian", "Pizza"],
//     rating: 4.3,
//     deliveryTime: "35-45 mins",
//     imageUrl:
//       "https://b.zmtcdn.com/data/pictures/chains/8/51418/8825db90e0b3e0013bffefdd596eaf58.jpg?fit=around|960:500&crop=960:500;*,*",
//     address: "404, Palasia Square, Indore",
//   },
//   {
//     id: "1005",
//     name: "Burger King",
//     cuisine: ["American", "Burgers"],
//     rating: 4.1,
//     deliveryTime: "20-30 mins",
//     imageUrl:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_806683.JPG",
//     address: "505, RNT Marg, Indore",
//   },
//   {
//     id: "1006",
//     name: "McDonald's",
//     cuisine: ["American", "Fast Food"],
//     rating: 4.4,
//     deliveryTime: "25-35 mins",
//     imageUrl:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/14dbbc72-8985-4bd8-b270-8df71f8cd6a5_65268.jpg",
//     address: "606, Malhar Mega Mall, AB Road, Indore",
//   },
//   {
//     id: "1007",
//     name: "Taco Bell",
//     cuisine: ["Mexican", "Fast Food"],
//     rating: 4.2,
//     deliveryTime: "30-40 mins",
//     imageUrl:
//       "https://tb-static.uber.com/prod/image-proc/processed_images/5881280d8257eaea64468779d3d7ede6/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
//     address: "707, C21 Mall, Vijay Nagar, Indore",
//   },
//   {
//     id: "1008",
//     name: "Haldiram's",
//     cuisine: ["Indian", "Snacks"],
//     rating: 4.6,
//     deliveryTime: "20-30 mins",
//     imageUrl:
//       "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/1abb89624b491497c8cff182d95ac457",
//     address: "808, Sarafa Bazaar, Indore",
//   },
//   {
//     id: "1009",
//     name: "Baskin Robbins",
//     cuisine: ["Desserts", "Ice Cream"],
//     rating: 4.7,
//     deliveryTime: "15-25 mins",
//     imageUrl:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
//     address: "909, Rajwada, Indore",
//   },
//   {
//     id: "1010",
//     name: "Chai Point",
//     cuisine: ["Beverages", "Snacks"],
//     rating: 4.5,
//     deliveryTime: "15-25 mins",
//     imageUrl:
//       "https://5.imimg.com/data5/SELLER/Default/2022/12/PP/TE/MD/15997009/chai-point-paper-cup.jpg",
//     address: "1010, Khajrana Main Road, Indore",
//   },
//   {
//     id: "1011",
//     name: "Starbucks",
//     cuisine: ["Beverages", "Coffee"],
//     rating: 4.6,
//     deliveryTime: "20-30 mins",
//     imageUrl:
//       "https://www.rd.com/wp-content/uploads/2019/01/starbucks-sign.jpg",
//     address: "1111, Treasure Island Mall, MG Road, Indore",
//   },
//   {
//     id: "1012",
//     name: "Barbeque Nation",
//     cuisine: ["Indian", "Barbecue"],
//     rating: 4.8,
//     deliveryTime: "40-50 mins",
//     imageUrl:
//       "https://www.barbequenation.com/sites/default/files/2024-07/BBQ_Phone%20Pay%20Ad%20creative_Grill%20image_1440x1080px%20%281%29_0.png",
//     address: "1212, Vijay Nagar Square, Indore",
//   },
//   {
//     id: "1013",
//     name: "Wow! Momo",
//     cuisine: ["Chinese", "Snacks"],
//     rating: 4.2,
//     deliveryTime: "25-35 mins",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwoXUAbNVCz_aJk7dsfZieHPJDojdUHS9ww&s",
//     address: "1313, Bhawarkuan, Indore",
//   },
//   {
//     id: "1014",
//     name: "Biryani Blues",
//     cuisine: ["Indian", "Biryani"],
//     rating: 4.4,
//     deliveryTime: "30-40 mins",
//     imageUrl:
//       "https://media-cdn.tripadvisor.com/media/photo-s/2d/bd/6d/cf/relish-guaranteed-leg.jpg",
//     address: "1414, Chappan Dukan, Indore",
//   },
//   {
//     id: "1015",
//     name: "Paradise Biryani",
//     cuisine: ["Indian", "Biryani"],
//     rating: 4.3,
//     deliveryTime: "35-45 mins",
//     imageUrl:
//       "https://b.zmtcdn.com/data/pictures/chains/2/91662/5c6f76bd1844f3814073926aadcb49ec.jpg",
//     address: "1515, Tilak Nagar, Indore",
//   },
// ];

// export default resList;
