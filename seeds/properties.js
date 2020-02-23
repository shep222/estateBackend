exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('property').del().then(function() {
        // Inserts seed entries
        return knex('property').insert([
            {
                id: 1,
                bedrooms: 3,
                address: '9411 Smokewood Dr',
                city: 'Mobile',
                state: 'Alabama',
                zipcode: 36695,
            }, {
                id: 2,
                bedrooms: 2,
                address: '824 Lisa Ct',
                city: 'Mobile',
                state: 'Alabama',
                zipcode: 36695,
            }
        ]);
    }).then(function() {
        // return knex.raw('alter sequence house_id_seq restart with 8')
    })
};
