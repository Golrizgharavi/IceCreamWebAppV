

app.controller('menuController', function (shopService) {

    var promiseGet = shopService.getItems(); 

    promiseGet.then(function (p1) {

        vm.Items = p1.data
    },
        function (errorP1) {
            alert('FAILURE LOADING Employees', errorP1)
        });

})