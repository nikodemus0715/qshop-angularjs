var qshop = angular.module("qshop", ['ui.router']);


qshop.controller("MainController", function($scope) {
    $scope.name = "world";
    $scope.products = getProductList();

    function getProductList () {
        return [{
            picture: '../assets/images/products/product-1.jpg',
            name: 'Limited Price',
            price: 299,
            onSale: true,
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
            specifications: [{
                label: 'prop 1',
                value: 'value 1',
            }, {
                label: 'prop 2',
                value: 'value 2',
            }, {
                label: 'prop 3',
                value: 'value 3',
            }],
            reviews: [{
                name: 'OLI 1',
                text: 'Great product 6/7 with rice'
            }, {
                name: 'OLI 2',
                text: 'Great product over 9000 out 10'
            }],
            pictures: [
                '../assets/images/products/product-1.jpg',
                '../assets/images/products/product-2.jpg',
                '../assets/images/products/product-3.jpg'
            ]
        }, {
            picture: '../assets/images/products/product-2.jpg',
            name: 'Amazing Product',
            price: 299,
            onSale: false,
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
            specifications: [{
                label: 'prop 1 1',
                value: 'value 1 1',
            }, {
                label: 'prop 1 2',
                value: 'value 1 2',
            }, {
                label: 'prop 1 3',
                value: 'value 1 3',
            }],
            reviews: [{
                name: 'OLI 1',
                text: 'Great product 6/7 with rice'
            }, {
                name: 'OLI 2',
                text: 'Great product over 9000 out 10'
            }],
            pictures: [
                '../assets/images/products/product-1.jpg',
                '../assets/images/products/product-2.jpg',
                '../assets/images/products/product-3.jpg'
            ]
        }];
    };
});

qshop.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "templates/firstpage.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html"
        })
        .state('products', {
            url: "/products",
            templateUrl: "templates/products.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "templates/about.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "templates/register.html"
        });
});
