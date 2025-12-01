// map --> email : string,  currentLocation : pair<double, double>, polyline: queue<pair<pair<double, double>, time: Date>>> stores last

// const locationStream = {
//     "email": {
//         currentLocation: {

//         },
//         polyline: [
//             {
//                 point: {

//                 },
//                 date: new Date()

//             },
//         ]
//    }
// }

// ===========================================================================

const locationStream = {

}

function addPoint(email, lat, lng) {
    // Create entry if needed
    if (!locationStream[email]) {
        locationStream[email] = {
            currentLocation: {},
            polyline: []
        };
    }

    const entry = locationStream[email];
    const now = Date.now();
    const limit = 5 * 60 * 1000; // 5 minutes in ms
    // const limit = 2 * 1000; // 5 minutes in ms

    // Add the fresh point
    entry.polyline.push({
        point: { lat, lng },
        date: new Date(now)
    });

    // Update current location
    entry.currentLocation = { lat, lng };

    // Sweep out expired points
    while (now - entry.polyline[0].date > limit) {
        entry.polyline.shift()
    }

    console.log(locationStream)

    // entry.polyline = entry.polyline.filter(p => now - p.date.getTime() < limit);
}

function removeEntry(email) {
    if (locationStream?.[email] !== undefined) {
        delete locationStream[email];
    }
    console.log(locationStream)
};

function getFilteredResult(email) {
    if (locationStream[email]) {
        return locationStream[email]
    }
    return {};
}

module.exports = {
    locationStream,
    addPoint,
    removeEntry
}


