// create 10 items of each category
let seededProducts = [];
for (let i = 0; i < 10; i++) {
    seededProducts = seededProducts.concat([
        {
            name: `Kiva Chocolate Bar-${i}`,
            description:
                'Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.',
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png',
            thc: '15%',
            cbd: '5%',
            category: 1,
            type: 3,
        },
        {
            name: `Boss OG Pre-Ground-${i}`,
            description:
                'Boss OG is a fragrant OG Kush pheno with similar qualities to Fire OG. This strain has OG aromas of lemon, lime, and fuel, and offers consumers happy, relaxing effects.',
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaW9mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0d42ff6385b473929de6ad07106fb15cd78d725/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/preground.png',
            thc: '15%',
            cbd: '5%',
            category: 2,
            type: 1,
        },
        {
            name: `Sour Patch Indoor-${i}`,
            description:
                'Best for people who enjoy eating candy and smoking hybrid strains! Smalls typically get graded out from large pounds.',
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUljIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f3015928b34ac3c7c8ba77560c0052a248002fe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/Sour%20Patch%20Smalls.png',
            thc: '15%',
            cbd: '5%',
            category: 3,
            type: 1,
        },
        {
            name: `Generic Sativa-${i}`,
            description: `There are few strains who compare to the focused energy and invigorating cerebral buzz of Green Crack. Green Crack tends to have a fruity mango like flavor. This strain is a no brainer if you're looking for a productive daytime high.`,
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1FFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--32bc9812e864aa9ec83cee81b35d905f58a6524d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/generic.jpg',
            thc: '15%',
            cbd: '5%',
            category: 4,
            type: 2,
        },
        {
            name: `OG Kush-${i}`,
            description: `Expect a hard, mixed high with intense euphoria followed by serious couch-lock. The cerebral boost from OG Kush is ideal for depression, bipolar disorder, and anxiety, while the heavy body high can help with pain and nausea. OG Kush is also used to treat Alzheimer's disease. Dry mouth and eyes are the most common negative effects, though headaches and paranoia are also possible.`,
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVVjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5dd3c7d5d9e176f83090a6e02632008ecef239c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/og%20kush%20sungrown.png',
            thc: '15%',
            cbd: '5%',
            category: 5,
            type: 2,
        },
        {
            name: `Gelato 33-${i}`,
            description:
                'Gelato #33 is a balanced hybrid with compact buds, staying true to its Cookie genetics. Like other Gelato phenotypes, Gelato #33 is covered with fiery orange hairs while its buds can be dark green to purple. With sweet citrus and fruity flavors, Gelato #33 offers an uplifting and energetic high that is perfect for any post-work activity after a long day.',
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblVqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0dbe8cddd948f77640b27fdd3caabbcf40e2278a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/gelato33.png',
            thc: '15%',
            cbd: '5%',
            category: 6,
            type: 1,
        },
        {
            name: `Maven Purple Punch-${i}`,
            description:
                'Smelling of blueberry muffins and fruity pebbles, Purple Punch has a nose to remember. The flavor of this strain matches its nose heavily quickly becoming a crowd favorite.',
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaG9oIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bff2c1d61d38590745e6651d4766d1526c36e959/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/purple%20velvet.png',
            thc: '15%',
            cbd: '5%',
            category: 7,
            type: 3,
        },
        {
            name: `12-Pack Sour Diesel Prerolls-${i}`,
            description: `Best known for its potent effects and pungent aromas, this strain is a great “pick me up” or mid day medication. With a smell of diesel power and lush earthy pine you won't be disappointed with the perfect high of Sour D, leaving users wanting more. This amazing flower and long time player has made a name for itself in the Sativa world and is not going away! Because this is ground up, occasionally there might be stems present.`,
            image:
                'https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFlpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--df274522e34569a05e3ab47def17b20a437bb51c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/Prerolls-2.jpg',
            thc: '15%',
            cbd: '5%',
            category: 8,
            type: 2,
        },
        {
            name: `Himalaya Blue Lights 510 Cartridge-${i}`,
            description: `The fusion of Blueberry and Northern Lights, Blue Lights is an indica strain with a noteworthy THC content. This flower emits a blueberry pungency thanks to the Blueberry influence, and provides a combination of sedative and euphoric long-lasting effects. Although fitting for day or nighttime use, this strain may be the perfect choice for end of the day.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUloIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7f91dff1cae23f22e12811305a1a1ff59226a1b7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/blue%20lights.png`,
            thc: '15%',
            cbd: '5%',
            category: 9,
            type: 4,
        },
        {
            name: `Pax Era Pod Anytime Hybrid-${i}`,
            description: `This hybrid blend is carefully crafted for enjoyment around the clock, day or night. The perfect combination to inspire relaxation, creativity and focus, consider hybrids as your “everyday” solution.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBVUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b50d0462858f2376fa0d6c51b79efe87590d3f7e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/Pax-Hybrid.jpg`,
            thc: '15%',
            cbd: '5%',
            category: 10,
            type: 1,
        },
        {
            name: `Raw Garden Chem Trails Live Resin Concentrate-${i}`,
            description: `Raw Garden's Live Resins have rich terpene profiles and are crafted with single source Clean Green Certified fresh frozen flowers. Chem Trails is a Indica-Hybrid.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ29nIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--73e756e26b261c89d4b6b434ff03d6abe1a96639/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/Raw%20Garden%20Chem%20Trails%20Live%20Resin%20Concentrates.png`,
            thc: '15%',
            cbd: '5%',
            category: 11,
            type: 1,
        },
        {
            name: `My Best Buds 1:1 Pet Tincture-${i}`,
            description: `The 1:1 CBD:THC ratio means that there are one part of CBD to one part of THC. For example, a 120 mg tincture delivers 60 mg of CBD and 60 mg THC in a 30 ml bottle. And one full 1 ml oral syringe from that bottle would contain 4 mg/ml of product or 2 mg CBD and 2 mg THC.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBoIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b075ba9705a5858937d4c9601d75ddb8d75d62ef/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/best%20bud%201%20to%201.png`,
            thc: '15%',
            cbd: '5%',
            category: 12,
            type: 4,
        },
        {
            name: `Pax Era Vape Battery + Charger-${i}`,
            description: `The effortless pen-and-pod system for cannabis oil. Control temperature, flavor and potency and achieve session predictability. Experience the new Era of cannabis enjoyment. Pods sold separately.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2tFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c85be47ed57f1bc78418d99274066aa918089142/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/pax-battery.jpg`,
            thc: '15%',
            cbd: '5%',
            category: 13,
            type: 5,
        },
        {
            name: `Kings Garden Banana OG Shatter-${i}`,
            description: `Banana OG is an indica-dominant cross between OG Kush and Banana. With a smell and flavor of overripe bananas, this hybrid definitely earns its name. Banana OG has tested at over 25% THC and has a reputation as a “creeper,” leaving those who over-imbibe in a near comatose state before intense hunger and sleepiness sets in. Patients treating muscular pain, loss of appetite, and insomnia may benefit from Banana OG.`,
            image: `https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGtmIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--46c71413c3118593e8b1951d453910998324ca15/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/banana%20og%20shatter.png`,
            thc: '15%',
            cbd: '5%',
            category: 14,
            type: 3,
        },
    ]);
}

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('products')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('products').insert(seededProducts);
        });
};
