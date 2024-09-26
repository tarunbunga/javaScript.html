function couponGenerator() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const coupon = {
                code: require("node:crypto").randomBytes(8).toString('hex'),
                available: Math.random() > 0.7 // 30% chance to be available
            };
            resolve(coupon);
        }, 100); // Simulate asynchronous operation
    });
}

async function collectCoupons(n) {
    const coupons = [];
    
    while (coupons.length < n) {
        const coupon = await couponGenerator();
        if (coupon.available) {
            coupons.push(coupon.code);
        }
    }

    return coupons;
}

// Example usage
collectCoupons(5).then(codes => {
    console.log('Collected Coupons:', codes);
});