const cardHTML =
    `
            <div class="card">
                <div class="card-image">
                    <img src="https://placehold.co/346x225" alt="">
                </div>

                <div class="card-info">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </div>

                <div class="card-footer">
                    This is a footer for the card
                </div>
            </div>
`

fillWithCards();

function fillWithCards() {
    for (let i = 0; i < 12; i++)
        document.getElementById("card_containers").innerHTML += cardHTML;

}