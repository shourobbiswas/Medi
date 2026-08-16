// ================= CART =================

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to your cart!");
}


function updateCart() {

    document.getElementById("cart-count").textContent = cart.length;

    let cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        document.getElementById("cart-total").textContent = "0";

        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small>৳${item.price}</small>
                </div>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("cart-total").textContent = total;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    updateCart();

    document.getElementById("cart-modal").style.display = "flex";
}


function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Order confirmed successfully! " +
        "This is a demo website."
    );

    cart = [];

    updateCart();

    closeCart();
}


// ================= APPOINTMENT =================

let selectedDoctor = "";


function openAppointment(doctor) {

    selectedDoctor = doctor;

    document.getElementById("selected-doctor").innerHTML =
        `<strong>Doctor:</strong> ${doctor}`;

    document.getElementById("appointment-modal").style.display =
        "flex";
}


function closeAppointment() {

    document.getElementById("appointment-modal").style.display =
        "none";
}


function confirmAppointment() {

    const name =
        document.getElementById("patient-name").value;

    const date =
        document.getElementById("appointment-date").value;

    const time =
        document.getElementById("appointment-time").value;


    if (!name || !date || !time) {

        alert("Please complete all fields.");

        return;
    }


    alert(
        `Appointment Confirmed!\n\n` +
        `Patient: ${name}\n` +
        `Doctor: ${selectedDoctor}\n` +
        `Date: ${date}\n` +
        `Time: ${time}`
    );


    document.getElementById("patient-name").value = "";
    document.getElementById("appointment-date").value = "";
    document.getElementById("appointment-time").value = "";

    closeAppointment();
}


// ================= TREATMENTS =================

const treatments = {

    fever: {
        title: "Fever",
        description:
            "For a mild fever, rest, drink plenty of fluids, " +
            "and monitor your temperature. Seek medical advice " +
            "if the fever is severe, persistent, or accompanied " +
            "by concerning symptoms."
    },

    cold: {
        title: "Common Cold",
        description:
            "Rest, drink enough fluids, and maintain good hygiene. " +
            "Most uncomplicated colds improve with time. Consult " +
            "a healthcare professional if symptoms become severe " +
            "or do not improve."
    },

    headache: {
        title: "Headache",
        description:
            "Rest in a quiet environment, drink water, and avoid " +
            "known triggers. A sudden, extremely severe headache " +
            "or a headache with neurological symptoms requires " +
            "urgent medical evaluation."
    },

    burn: {
        title: "Minor Burns",
        description:
            "For a minor burn, cool the area under clean running " +
            "water. Do not apply ice directly to the burn. Seek " +
            "medical care for large, deep, electrical, chemical, " +
            "or otherwise serious burns."
    }

};


function showTreatment(type) {

    const treatment = treatments[type];

    document.getElementById("treatment-title").textContent =
        treatment.title;

    document.getElementById("treatment-description").textContent =
        treatment.description;

    document.getElementById("treatment-modal").style.display =
        "flex";
}


function closeTreatment() {

    document.getElementById("treatment-modal").style.display =
        "none";
}


// ================= CLOSE MODAL ON OUTSIDE CLICK =================

window.addEventListener("click", function(event) {

    const cartModal =
        document.getElementById("cart-modal");

    const appointmentModal =
        document.getElementById("appointment-modal");

    const treatmentModal =
        document.getElementById("treatment-modal");


    if (event.target === cartModal) {
        closeCart();
    }

    if (event.target === appointmentModal) {
        closeAppointment();
    }

    if (event.target === treatmentModal) {
        closeTreatment();
    }

});