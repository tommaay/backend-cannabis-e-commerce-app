exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('categories')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('categories').insert([
                {
                    name: 'Edibles',
                    description: `Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience.	Before you realize, you'll be hungry for more.`,
                },
                {
                    name: 'Ready to Roll',
                    description: `Our Ready to Roll flower is all you need to roll one up at a moment's notice. These half ounces of pre-ground quality cannabis are convenient, potent, and priced to make any day a cheap vacation.`,
                },
                {
                    name: 'Smalls',
                    description: `Looking for the best deal in town? Our Smalls are the smaller buds from the plant that come with an even smaller price tag. This carefully selected assortment is the reason why big things come in small packages.`,
                },
                {
                    name: 'Generic Flower',
                    description: null,
                },
                {
                    name: 'Sungrown Flower',
                    description: `Our Sungrown Flower stays true to cannabis' original roots – it's sustainable, organic, and unpretentious. With an ever-changing medley of flavors, you'll always find intrigue in what the sun has to offer.`,
                },
                {
                    name: 'Greenhouse Flower',
                    description: `Looking for the cream of the crop? Our Greenhouse Flower is pure fire – it's what the farmers gossip about at their dinner tables. This flower is the pride and joy of the sustainable cannabis movement. By using grow techniques like light deprivation, this small-batch flower isn't something you want to miss.`,
                },
                {
                    name: 'Indoor Top Shelf',
                    description: `Are you someone who wants the best? Our indoor flower is why you tell your friends to come over 10 minutes after receiving your delivery. Your neighbors down the street might think you own a pet skunk.`,
                },
                {
                    name: 'Prerolls',
                    description: `Looking for the ultimate convenience that can be shared with friends on a moment's notice? With these organic prerolls, you'll be ready to pass one to the left whenever the occasion calls – your friends will love you a little bit more too.`,
                },
                {
                    name: 'Cartridges',
                    description: null,
                },
                {
                    name: 'Pax Pods',
                    description: `Pax offers the premier vaporizing experience that is also discreet. With a Pax Era battery, you can control temperature, flavor, and potency to ensure every experience is predictable.`,
                },
                {
                    name: 'Concentrates',
                    description: `Our concentrates offer the most elevated experiences for the advanced consumer. We change our concentrate flavors nearly every week so you'll always be excited to see what's next on your agenda.`,
                },
                {
                    name: 'Wellness',
                    description: `Want to feel rejuvenated, relaxed, and wholesome? Our wellness products will transport you to that serene destination you'd like to revisit whenever you need a break.`,
                },
                {
                    name: 'Accessories',
                    description: `Need a battery and charger for your cartridge? We've got you. With our merchandise you can now rep Flower Co everywhere you go.`,
                },
                {
                    name: 'Shatter',
                    description: `Snap off a piece of shatter and slide into concentrate heaven with our premium offerings. Just one dab and you’ll punch your ticket to paradise.`,
                },
            ]);
        });
};
