
const slider = document.getElementById("slider");

// A function to update the price based on the slider value
const decidePrice = (price) => {
    if (price >= 0 && price <= 20) {
        return 8;
    } else if (price > 20 && price <= 40) {
        return 12;
    } else if (price > 40 && price <= 60) {
        return 16;
    } else if (price > 60 && price <= 80) {
        return 24;
    } else {
        return 36;
    }
}

const pricingData = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
];

slider.addEventListener("change", function () {
    const isYearly = document.getElementById('toggle').checked;
    const numberOfViews = pricingData.filter((data) => data.price === decidePrice(slider.value))[0].views;
    document.getElementById("pageviews").innerText = numberOfViews + " Pageviews";
    document.querySelectorAll('.price-class').forEach(container => {
        const cost =  !isYearly ? decidePrice(slider.value) : (decidePrice(slider.value) * 12 * 0.75)
        container.innerText = '$' + cost + '.00';
    })

    document.querySelectorAll('.time').forEach(time => {
        const currentPlan = isYearly ? '/ year' : '/ month';
        time.innerText = currentPlan;
    })
});

document.getElementById('toggle').onchange = (event) => {
    const isYearly = event.target.checked
    document.querySelectorAll('.price-class').forEach(container => {
        const cost =  !isYearly ? decidePrice(slider.value) : (decidePrice(slider.value) * 12 * 0.75)
        container.innerText = '$' + cost + '.00';
    })
    document.querySelectorAll('.time').forEach(time => {
        const currentPlan = isYearly ? '/ year' : '/ month';
        time.innerText = currentPlan;
    })
}