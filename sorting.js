module.exports = {
    sorting: async function (property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    },
    compareSorting: async function ( a, b ) {
        if ( a.last_nom < b.last_nom ){
            return -1;
        }
        if ( a.last_nom > b.last_nom ){
            return 1;
        }
        return 0;
    },
    dynamicsort: async function ( property,order ) {
        var sort_order = 1;
        if(order === "desc"){
            sort_order = -1;
        }
        return function (a, b){
            // a should come before b in the sorted order
            if(a[property] < b[property]){
                return -1 * sort_order;
                // a should come after b in the sorted order
            }else if(a[property] > b[property]){
                return 1 * sort_order;
                // a and b are the same
            }else{
                return 0 * sort_order;
            }
        }
    }



}


function dynamicsort(property,order) {

}
