
        function hospitalDetails(hospitalName) {
            const hospitals = {
                "Medicare Hospital": {
                    name: "Medicare Hospital",
                    description: "Providing quality healthcare services to the community for over 50 years.",
                    logo: "./img/medicare logo.webp"
                },
                "Global Health Clinic": {
                    name: "Global Health Clinic",
                    description: "World-class medical services with a focus on patient care and comfort.",
                    logo: "./img/sum logo.jfif"
                },
                "Sunrise Medical Center": {
                    name: "Sunrise Medical Center",
                    description: "State-of-the-art facilities and experienced medical professionals.",
                    logo: "./img/apollo logo.jfif"
                },
                "Heal Well Hospital": {
                    name: "Heal Well Hospital",
                    description: "Committed to providing compassionate and comprehensive care.",
                    logo: "./img/kims logo.jfif"
                },
                "Care Hospital": {
                    name: "Care Hospital",
                    description: "Committed to providing compassionate and comprehensive care.",
                    logo: "./img/care hospital.png"
                },
                "MedLife Hospital": {
                    name: "MedLife Hospital",
                    description: "Committed to providing compassionate and comprehensive care.",
                    logo: "./img/medilife logo.avif"
                }
            };

            // localStorage.setItem('selectedHospital', JSON.stringify(hospitals[hospitalName]));
            // window.location.href = 'hospital-details.html';
            localStorage.setItem('selectedHospital', JSON.stringify(hospitals[hospitalName]));
            window.open('hospital-details.html', '_blank');
        }


        document.addEventListener('DOMContentLoaded', function () {
            const hospitals = 10;
            const diagnosticCenters = 50;
            const pharmacies = 10;
            const doctors = 500;

            function animateNumbers(elementId, number) {
                let counter = 0;
                const element = document.getElementById(elementId);
                const interval = setInterval(() => {
                    if (counter >= number) {
                        clearInterval(interval);
                    } else {
                        counter++;
                        element.textContent = counter + '+';
                    }
                }, 20);
            }

            animateNumbers('network-hospitals', hospitals);
            animateNumbers('diagnostic-centers', diagnosticCenters);
            animateNumbers('pharmacies', pharmacies);
            animateNumbers('doctors', doctors);
        });

        function toggleDescription(button) {
            const shortDesc = button.previousElementSibling.previousElementSibling;
            const fullDesc = button.previousElementSibling;

            if (fullDesc.style.display === "none") {
                shortDesc.style.display = "none";
                fullDesc.style.display = "block";
                button.textContent = "See Less";
            } else {
                shortDesc.style.display = "block";
                fullDesc.style.display = "none";
                button.textContent = "See More";
            }
        }
    