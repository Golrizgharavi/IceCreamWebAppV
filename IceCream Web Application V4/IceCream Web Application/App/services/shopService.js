

app.service('shopService', function ($http) {

    this.SubmitEmailSubscribe = function (email) {

       // alert(email);
        return $http({

            method: "POST",
            url: "/GetData.aspx?q=1&e=" + email ,
            headers: { 'Content-Type': 'application/json' },

        }).success(function (data) {

            //alert('success'+ JSON.stringify(data));

        }).error(function (data) {

            alert('Failed' + JSON.stringify(data));


        })

    }


    this.getItems = function () {


        return $http({
            method: "GET",
            url: "/Json/Items.json",
            //headers: { 'Content-Type': 'application/json' },
        }).success(function (data) {
           // alert('success' + JSON.stringify(data))

        }).error(function (data) {

            alert(data);
        });
    }

 
})