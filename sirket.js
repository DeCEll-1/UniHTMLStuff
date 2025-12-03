const cardHTML =
    `
            <div class="card">
                <div class="card-image">
                    <img src="{IMG_URL}" alt="">
                </div>

                <div class="card-info">
                    {CARD_INFO}
                </div>

                <div class="card-footer">
                    {CARD_FOOTER}
                </div>
            </div>
`

fillWithCards();

function fillWithCards() {
const card_contents = [
    {
        url: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
        info: "Spicy Fusion Pizza with Tandoori Toppings",
        footer: "Spice Crust Pizzeria • Open until 11 PM"
    },
    {
        url: "https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_1280.jpg",
        info: "Classic Neapolitan Pizza Baked in Wood-Fired Oven",
        footer: "Nonna’s Pizzeria • Est. 1987"
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/08/15/10/12/pizza-2643374_1280.jpg",
        info: "Detroit-Style Deep Dish with Crispy Cheese Edges",
        footer: "Motor City Pizza Co. • Extra Thick Crust"
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273_1280.jpg",
        info: "New York Thin-Crust Foldable Slices",
        footer: "Brooklyn Slice • $3.50 a Slice"
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg",
        info: "Gourmet Truffle & Wild Mushroom Pizza",
        footer: "Luxe Pie • Premium Ingredients Only"
    },
    {
        url: "https://cdn.pixabay.com/photo/2020/10/17/11/06/pizza-5661748_1280.jpg",
        info: "Chicago Tavern-Style Square Cut Perfection",
        footer: "Windy City Pies • Thin & Crunchy"
    },
    {
        url: "https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359755_1280.jpg",
        info: "Late-Night Pepperoni Overload Pizza",
        footer: "Midnight Pie • Open till 3 AM"
    },
    {
        url: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
        info: "Award-Winning Homemade Dough Recipe",
        footer: "Jay’s Signature Crust • Since 1999"
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        info: "Buffalo Chicken Pizza with Blue Cheese Drizzle",
        footer: "Wing & Pie • Spicy Level 1-5"
    },
    {
        url: "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_1280.jpg",
        info: "Margherita Pizza with Fresh Burrata",
        footer: "Bella Napoli • Made with Love"
    },
    {
        url: "https://cdn.pixabay.com/photo/2020/05/11/04/11/pizza-5156418_1280.jpg",
        info: "Vegan BBQ Jackfruit Pizza",
        footer: "Green Slice • 100% Plant-Based"
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/06/17/15/06/pan-pizza-2412474_1280.jpg",
        info: "Grandma-Style Square Pizza with Vodka Sauce",
        footer: "Nonna Rosa’s Kitchen • Family Recipe"
    }
];
    for (let i = 0; i < 9; i++) {
        // https://placehold.co/346x225
        // This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        // This is a footer for the card
        const card_content = card_contents[i];

        document.getElementById("card_containers").innerHTML += 
        cardHTML.replace(
            "{IMG_URL}",
            card_content.url
        ).replace(
            "{CARD_INFO}",
            card_content.info
        ).replace(
            "{CARD_FOOTER}",
            card_content.footer
        );

    }

}