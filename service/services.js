angular.module("customServices", [])
.factory("pagerService", function() {
    // service definition
    var service = {};
    service.getPager = getPager;
    return service;

    // service implementation
    /* generate array of number from start(inclusive) to end(inclusive) */
    function range(start, end) {
        return Array.from(Array(end-start+1), (_, i) => start + i);
    }

    /* @totalItems : total number
     * @currentPage
     * @pageSize
    */
    function getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = range(startPage, endPage);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
})
.factory("userMngService", function() {
    var service = {};
    var users = [
        {id:1, fName:'Hege',  lName:"Pege", title:"Software Engineer", gender:"male", age:22},
        {id:2, fName:'Kim',   lName:"Pim", title:"Principle", gender:"female", age:45},
        {id:3, fName:'Sal',   lName:"Smith", title:"Project Manager", gender:"male", age:35 },
        {id:4, fName:'Jack',  lName:"Jones", title:"Senior Engineer", gender:"male", age:32 },
        {id:5, fName:'John',  lName:"Doe", title:"ME", gender:"male", age:30 },
        {id:6, fName:'Peter', lName:"Pan", title:"blacksmith", gender:"male", age:19 }];

    var userlist = users;
    var user_id = users.length;

    service.createUser = function(usrObj) {
        usrObj.id = user_id++;
        users.push(usrObj);
    }

    service.updateUser = function(usrObj) {
        var id = usrObj.id;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users[i] = usrObj;
                break;
            }
        }
    }

    service.deleteUser = function(usrId) {
        var index = users.length;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === usrId) {
                index = i;
                break;
            }
        }
        users.splice(i, 1);
    }

    service.getUserlist = function() {
        return userlist;
    }

    return service;
});