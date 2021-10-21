var initialState = [
    {
        id: 1,
        img: 'https://linhkienplus.com/wp-content/uploads/2021/03/iphone-7-32gb-cu-chinh-hang-98.jpg',
        name: 'Iphone 7(64GB) màu hồng',
        ratings: 5,
        description: 'Sản phẩm do Apple sản xuất',
        price: 250
    },
    {
        id: 2,
        img: 'https://linhkienplus.com/wp-content/uploads/2021/03/samsung-galaxy-s10-plus.jpg',
        name: 'Samsung Galaxy S10+ (Plus)',
        ratings: 3,
        description: 'Sản phẩm do Samsung sản xuất',
        price: 200
    },
    {
        id: 3,
        img: 'https://linhkienplus.com/wp-content/uploads/2021/03/iphone-x-64gb-chinh-hang-da-qua-su-dung.jpg',
        name: 'iPhone X 64GB màu xám',
        ratings: 2,
        description: 'Sản phẩm do China sản xuất',
        price: 100
    }
];

const reducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default reducers