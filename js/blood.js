const donors = JSON.parse(localStorage.getItem('donors')) || [];

function loadDonors(filterBloodGroup = '') {
    const donorsContainer = document.getElementById('donors');
    donorsContainer.innerHTML = '';
    donors.forEach(donor => {
        if (filterBloodGroup === '' || donor.bloodGroup === filterBloodGroup) {
            const donorDiv = document.createElement('div');
            donorDiv.classList.add('donor');
            donorDiv.innerHTML = `
                <div>
                    <strong>${donor.name}</strong><br>
                    Blood Group: ${donor.bloodGroup}<br>
                    Location: ${donor.location}<br>
                    Email: ${donor.email}
                </div>
                <div>
                    <a href="tel:${donor.phone}" class="btn btn-success">Call Now</a>
                </div>
            `;
            donorsContainer.appendChild(donorDiv);
        }
    });
}

document.getElementById('donate-blood').addEventListener('click', function() {
    document.getElementById('donor-form').classList.remove('hidden');
    document.getElementById('donor-list').classList.add('hidden');
});

document.getElementById('need-blood').addEventListener('click', function() {
    document.getElementById('donor-form').classList.add('hidden');
    document.getElementById('donor-list').classList.remove('hidden');
    loadDonors();
});

document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const donor = {
        name: document.getElementById('donor-name').value,
        email: document.getElementById('donor-email').value,
        phone: document.getElementById('donor-phone').value,
        bloodGroup: document.getElementById('donor-blood-group').value,
        location: document.getElementById('donor-location').value
    };
    addDonor(donor);
    this.reset();
    alert('Thank you for donating blood!');
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bloodGroup = document.getElementById('search-blood-group').value;
    loadDonors(bloodGroup);
});

function addDonor(donor) {
    donors.push(donor);
    localStorage.setItem('donors', JSON.stringify(donors));
}

loadDonors();
