const mailRoute = [ "Alice's House", "Cabin", 
    "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", 
    "Ernie's House", "Grete's House", 
    "Shop", "Grete's House", 
    "Farm","Marketplace", 
    "Post Office"];

function findRoute(graph, from, to){
    let work = [{at: from, route: []}];
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)})
            }
        }
    }
}

export { mailRoute, findRoute };