

// Load the data from the API
data=[
    [
        {
            "name": "Jessica Taylor",
            "gender": "Female",
            "age": 28,
            "profile_picture": "https://fedskillstest.ct.digital/4.png",
            "date_of_birth": "1996-08-23",
            "phone_number": "(415) 555-1234",
            "emergency_contact": "(415) 555-5678",
            "insurance_type": "Sunrise Health Assurance",
            "diagnosis_history": [
                {
                    "month": "March",
                    "year": 2024,
                    "blood_pressure": {
                        "systolic": {
                            "value": 160,
                            "levels": "Higher than Average"
                        },
                        "diastolic": {
                            "value": 78,
                            "levels": "Lower than Average"
                        }
                    },
                    "heart_rate": {
                        "value": 78,
                        "levels": "Lower than Average"
                    },
                    "respiratory_rate": {
                        "value": 20,
                        "levels": "Normal"
                    },
                    "temperature": {
                        "value": 98.6,
                        "levels": "Normal"
                    }
                }
                // Additional months of diagnostic history
            ],
            "diagnostic_list": [
                {
                    "name": "Hypertension",
                    "description": "Chronic high blood pressure",
                    "status": "Under Observation"
                }
                // Additional diagnostics
            ],
            "lab_results": [
                "Blood Tests",
                "CT Scans"
                // More lab results
            ]
        }
    ]
    
]


/// Diagnosis History
document.addEventListener('DOMContentLoaded', () => {
    const patients = [
        {
            id: 'patient-1',
            name: 'Emily Williams',
            gender: 'Female',
            age: 18,
            dob: 'January 1, 2005',
            contactInfo: '(123) 456-7890',
            emergencyContacts: '(987) 654-3210',
            insuranceProvider: 'HealthCare Inc.',
            profilePicture: './Images/Layer 8@2x.png',
            bloodPressure: {
                systolic:[120, 125, 130, 128, 135, 140, 138],
                diastolic: [80, 82, 85, 83, 88, 90, 87]

            },
            respiratoryRate: 20,
            temperature: 98.6,
            heartRate: 72
        },
        {
            id: 'patient-2',
            name: 'Ryan Johnson',
            gender: 'Male',
            age: 45,
            dob: 'January 1, 1978',
            contactInfo: '(123) 456-7890',
            emergencyContacts: '(987) 654-3210',
            insuranceProvider: 'HealthCare Inc.',
            profilePicture: './Images/Layer 1@2x.png',
            bloodPressure: {
                systolic: [130, 135, 140, 138, 145, 150, 148],
                diastolic: [85, 88, 90, 87, 92, 95, 93]
            },
            respiratoryRate: 22,
            temperature: 99.1,
            heartRate: 80
        },
        {
            id: 'patient-3',
            name: 'Brandon Mitchell',
            gender: 'Male',
            age: 36,
            dob: 'January 1, 1987',
            contactInfo: '(123) 456-7890',
            emergencyContacts: '(987) 654-3210',
            insuranceProvider: 'HealthCare Inc.',
            profilePicture: './Images/Layer 3@2x.png',
            bloodPressure: {
                systolic: [140, 145, 150, 148, 155, 160, 158],
                diastolic: [90, 92, 95, 93, 98, 100, 97]
            },
            respiratoryRate: 30,
            temperature: 98.6,
            heartRate: 98
        },
        {
            id: 'patient-4',
            name: 'Jessica Taylor',
            gender:'Female',
            age: 28,
            dob: 'August 23, 1996',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 2@2x.png',
            bloodPressure: {
                systolic: [160, 165, 170, 168, 175, 180, 178],
                diastolic: [78, 80, 82, 79, 85, 88, 86]
            },
            respiratoryRate: 20,
            temperature: 98.6,
            heartRate: 78

        },
        {
            id: 'patient-5',
            name: 'Samantha Johnson',
            gender:'Female',
            age: 56,
            dob: 'April 15, 1965',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 6@2x.png',
            bloodPressure: {
                systolic:[120, 125, 130, 128, 135, 140, 138],
                diastolic: [80, 82, 85, 83, 88, 90, 87]
            },
            respiratoryRate: 26,
            temperature: 92.6,
            heartRate: 68
        },
        {
            id: 'patient-6',
            name: 'Ashley Martinez',
            gender:'Female',
            age:54,
            dob: 'February 28, 1967',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 12@2x.png',
            bloodPressure: {
                systolic: [130, 135, 140, 138, 145, 150, 148],
                diastolic: [85, 88, 90, 87, 92, 95, 93]
            },
            respiratoryRate: 25,
            temperature: 98.6,
            heartRate: 88

        },
        {

            id: 'patient-7',
            name:'Olivia Brown',
            gender:'Female',
            age: 22,
            dob: 'May 10, 1999',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 10@2x.png',
            bloodPressure: {
                systolic: [140, 145, 150, 148, 155, 160, 158],
                diastolic: [90, 92, 95, 93, 98, 100, 97]
            },
            respiratoryRate: 20,
            temperature: 98.6,
            heartRate: 78
        },
        {
            id: 'patient-8',
            name: 'Tyler Davis',
            gender:'Male',
            age:30,
            dob: 'December 12, 1991',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 9@2x.png',
            bloodPressure: {
                systolic: [160, 165, 170, 168, 175, 180, 178],
                diastolic: [78, 80, 82, 79, 85, 88, 86]
            },
            respiratoryRate: 20,
            temperature: 98.6,
            heartRate: 78

        },
        {
            id: 'patient-9',
            name: 'Kevin Anderson',
            gender:'Male',
            age: 40,
            dob: 'June 20, 1981',
            contactInfo: '(415) 555-1234',
            emergencyContacts: '(415) 555-5678',
            insuranceProvider: 'Sunrise Health Assurance',
            profilePicture: './Images/Layer 4@2x.png',
            bloodPressure: {
                systolic: [120, 125, 130, 128, 135, 140, 138],
                diastolic: [80, 82, 85, 83, 88, 90, 87]
            },
            respiratoryRate: 20,
            temperature: 98.6,
            heartRate: 78
            
        }
    ];

    // Add event listener to search button
    document.getElementById('search-button').addEventListener('click', searchPatients);

    // Search patients
    function searchPatients() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const filteredPatients = patients.filter(patient => 
            patient.name.toLowerCase().includes(query)
        );
        displaySearchResults(filteredPatients);
        if (filteredPatients.length > 0) {
            displayPatientDetails(filteredPatients[0]);
        }
        //clear the search input Input
        document.getElementById('search-input').value = '';
    }

    // Display search results
    function displaySearchResults(patients) {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (patients.length === 0) {
            resultsContainer.innerHTML = '<p>No patients found.</p>';
            return;
        }

        patients.forEach(patient => {
            const patientElement = document.createElement('div');
            patientElement.classList.add('patient');
            patientElement.innerHTML = `
                <h3>${patient.name}</h3>
                <p>Gender: ${patient.gender}</p>
                <p>Age: ${patient.age}</p>
            `;
            patientElement.addEventListener('click', () => {
                displayPatientDetails(patient);
            });
            resultsContainer.appendChild(patientElement);
        });
    }

    // Display patient details
    function displayPatientDetails(patient) {
        const patientDetailsSection = document.querySelector('.patient-details');
        patientDetailsSection.querySelector('h2').textContent = patient.name;
        patientDetailsSection.querySelector('img').src = patient.profilePicture;
        patientDetailsSection.querySelector('p:nth-of-type(1)').innerHTML = `<span><img src="./Images/BirthIcon.png"></span>Date of Birth: ${patient.dob}`;
        patientDetailsSection.querySelector('p:nth-of-type(2)').textContent = `Gender: ${patient.gender}`;
        patientDetailsSection.querySelector('p:nth-of-type(3)').textContent = `Contact Info: ${patient.contactInfo}`;
        patientDetailsSection.querySelector('p:nth-of-type(4)').textContent = `Emergency Contacts: ${patient.emergencyContacts}`;
        patientDetailsSection.querySelector('p:nth-of-type(5)').textContent = `Insurance Provider: ${patient.insuranceProvider}`;

        // Update diagnostic cards
        document.getElementById('respiratory-rate').textContent = `${patient.respiratoryRate} bpm`;
        document.getElementById('temperature').textContent = `${patient.temperature}°F`;
        document.getElementById('heart-rate').textContent = `${patient.heartRate} bpm`;

        // Create blood pressure chart
        const bloodPressureCtx = document.getElementById('bloodPressureChart').getContext('2d');
        new Chart(bloodPressureCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example labels
                datasets: [{
                    label: 'Systolic Blood Pressure (Higher than Average)',
                        data: patient.bloodPressure.systolic,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                },
                {
                    label: 'Diastolic Blood Pressure (Lower than Average)',
                        data: patient.bloodPressure.diastolic,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        fill: false
                }    
            ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create heart rate chart
        const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
        new Chart(heartRateCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example labels
                datasets: [{
                    label: 'Heart Rate',
                    data: Array(7).fill(patient.heartRate), // Example data
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});