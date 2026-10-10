// =========================================================
// LIVEWIRE VADAPALANI
// COMPLETE JAVASCRIPT
// REGISTRATION + PROFILE + COURSE PROTECTION
// =========================================================



// =========================================================
// MOBILE MENU
// =========================================================

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("active");

}



// =========================================================
// MAIN ELEMENTS
// =========================================================

const enquiryForm =
    document.getElementById("enquiryForm");

const careerStatus =
    document.getElementById("careerStatus");

const studentDetails =
    document.getElementById("studentDetails");

const workingDetails =
    document.getElementById("workingDetails");

const registrationSuccess =
    document.getElementById("registrationSuccess");

const submitButton =
    document.getElementById("submitRegistration");

const enquireButton =
    document.getElementById("enquireButton");

const profileWrapper =
    document.getElementById("profileWrapper");

const profileButton =
    document.getElementById("profileButton");

const profileDropdown =
    document.getElementById("profileDropdown");

const viewProfileBtn =
    document.getElementById("viewProfileBtn");

const profileModal =
    document.getElementById("profileModal");

const profileClose =
    document.getElementById("profileClose");

const profileShortName =
    document.getElementById("profileShortName");



// =========================================================
// MOBILE MENU CLOSE
// =========================================================

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navMenu")
                    .classList.remove("active");

            }
        );

    });



// =========================================================
// CAREER STATUS
// =========================================================

careerStatus.addEventListener(
    "change",
    function() {


        // HIDE BOTH

        studentDetails.style.display =
            "none";

        workingDetails.style.display =
            "none";


        // RESET REQUIRED

        document.getElementById(
            "collegeName"
        ).required = false;

        document.getElementById(
            "department"
        ).required = false;

        document.getElementById(
            "companyName"
        ).required = false;

        document.getElementById(
            "workLocation"
        ).required = false;



        // STUDENT

        if (
            this.value === "Student"
        ) {

            studentDetails.style.display =
                "flex";

            document.getElementById(
                "collegeName"
            ).required = true;

            document.getElementById(
                "department"
            ).required = true;

        }



        // WORKING PROFESSIONAL

        else if (
            this.value ===
            "Working Professional"
        ) {

            workingDetails.style.display =
                "flex";

            document.getElementById(
                "companyName"
            ).required = true;

            document.getElementById(
                "workLocation"
            ).required = true;

        }

    }
);



// =========================================================
// FORM SUBMIT
// =========================================================

enquiryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();



        // CHECK FORM

        if (
            !enquiryForm.checkValidity()
        ) {

            enquiryForm.reportValidity();

            return;

        }



        // =====================================================
        // GET VALUES
        // =====================================================

        const name =
            document.getElementById(
                "studentName"
            ).value.trim();


        const phone =
            document.getElementById(
                "studentPhone"
            ).value.trim();


        const email =
            document.getElementById(
                "studentEmail"
            ).value.trim();


        const dob =
            document.getElementById(
                "studentDob"
            ).value;


        const address =
            document.getElementById(
                "studentAddress"
            ).value.trim();


        const area =
            document.getElementById(
                "studentArea"
            ).value.trim();


        const district =
            document.getElementById(
                "studentDistrict"
            ).value.trim();


        const pincode =
            document.getElementById(
                "studentPincode"
            ).value.trim();


        const status =
            document.getElementById(
                "careerStatus"
            ).value;


        const course =
            document.getElementById(
                "studentCourse"
            ).value;


        const message =
            document.getElementById(
                "studentMessage"
            ).value.trim();


        const collegeName =
            document.getElementById(
                "collegeName"
            ).value.trim();


        const department =
            document.getElementById(
                "department"
            ).value.trim();


        const companyName =
            document.getElementById(
                "companyName"
            ).value.trim();


        const workLocation =
            document.getElementById(
                "workLocation"
            ).value.trim();



        // =====================================================
        // PHONE VALIDATION
        // =====================================================

        if (
            !/^[0-9]{10}$/.test(phone)
        ) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;

        }



        // =====================================================
        // PINCODE VALIDATION
        // =====================================================

        if (
            !/^[0-9]{6}$/.test(pincode)
        ) {

            alert(
                "Please enter a valid 6-digit pincode."
            );

            return;

        }



        // =====================================================
        // STUDENT VALIDATION
        // =====================================================

        if (
            status === "Student" &&
            (
                !collegeName ||
                !department
            )
        ) {

            alert(
                "Please enter college name and department."
            );

            return;

        }



        // =====================================================
        // WORKING PROFESSIONAL VALIDATION
        // =====================================================

        if (
            status ===
            "Working Professional" &&
            (
                !companyName ||
                !workLocation
            )
        ) {

            alert(
                "Please enter company name and work location."
            );

            return;

        }



        // =====================================================
        // SAVE ALL DETAILS
        // =====================================================

        const registrationData = {

            registered: true,

            name: name,

            phone: phone,

            email: email,

            dob: dob,

            address: address,

            area: area,

            district: district,

            pincode: pincode,

            careerStatus: status,

            collegeName: collegeName,

            department: department,

            companyName: companyName,

            workLocation: workLocation,

            course: course,

            message: message

        };



        localStorage.setItem(
            "livewireRegistration",
            JSON.stringify(
                registrationData
            )
        );


        // Backward-compatible registration flag

        localStorage.setItem(
            "livewireRegistered",
            "true"
        );



        // =====================================================
        // WHATSAPP MESSAGE
        // =====================================================

        let whatsappMessage =

            "LIVEWIRE VADAPALANI - NEW REGISTRATION\n\n" +

            "Full Name: " +
            name +
            "\n" +

            "Mobile Number: " +
            phone +
            "\n" +

            "Email ID: " +
            email +
            "\n" +

            "Date of Birth: " +
            dob +
            "\n" +

            "Address: " +
            address +
            "\n" +

            "Area: " +
            area +
            "\n" +

            "District: " +
            district +
            "\n" +

            "Pincode: " +
            pincode +
            "\n" +

            "Career Status: " +
            status +
            "\n";



        // STUDENT

        if (
            status === "Student"
        ) {

            whatsappMessage +=

                "College Name: " +
                collegeName +
                "\n" +

                "Department: " +
                department +
                "\n";

        }



        // WORKING PROFESSIONAL

        if (
            status ===
            "Working Professional"
        ) {

            whatsappMessage +=

                "Company / Organisation: " +
                companyName +
                "\n" +

                "Work Location: " +
                workLocation +
                "\n";

        }



        // COURSE

        whatsappMessage +=

            "Course: " +
            course +
            "\n";



        // MESSAGE

        if (message) {

            whatsappMessage +=

                "Message: " +
                message +
                "\n";

        }



        // =====================================================
        // SUCCESS MESSAGE
        // =====================================================

        registrationSuccess.innerHTML =

            "✅ <strong>Registration Submitted Successfully!</strong>" +

            "<br>" +

            "Your details have been saved to your profile." +

            "<br>" +

            "Please press <strong>Send</strong> in WhatsApp.";

        registrationSuccess.style.display =
            "block";



        // =====================================================
        // SUBMIT BUTTON
        // =====================================================

        submitButton.innerText =
            "Submitted ✓";

        submitButton.disabled =
            true;



        // =====================================================
        // CHANGE ENQUIRE TO PROFILE
        // =====================================================

        showRegisteredProfile();



        // =====================================================
        // OPEN WHATSAPP
        // =====================================================

        const whatsappURL =

            "https://wa.me/917823959959?text=" +

            encodeURIComponent(
                whatsappMessage
            );


        window.open(
            whatsappURL,
            "_blank"
        );



        // =====================================================
        // SCROLL SUCCESS
        // =====================================================

        setTimeout(
            function() {

                registrationSuccess.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            },
            300
        );

    }
);



// =========================================================
// CHECK IF USER IS REGISTERED
// =========================================================

function isRegistered() {

    const data =
        localStorage.getItem(
            "livewireRegistration"
        );


    if (!data) {

        return false;

    }


    try {

        const parsed =
            JSON.parse(data);

        return parsed.registered === true;

    }

    catch(error) {

        return (
            localStorage.getItem(
                "livewireRegistered"
            ) === "true"
        );

    }

}



// =========================================================
// SHOW PROFILE IN NAVBAR
// =========================================================

function showRegisteredProfile() {

    if (!profileWrapper) {
        return;
    }


    if (!isRegistered()) {

        profileWrapper.style.display =
            "none";

        enquireButton.style.display =
            "inline-block";

        return;

    }


    // Hide enquire

    enquireButton.style.display =
        "none";


    // Show profile

    profileWrapper.style.display =
        "block";


    // Load name

    const data =
        getRegistrationData();


    if (
        data &&
        data.name
    ) {

        profileShortName.innerText =
            data.name;

    }

}



// =========================================================
// GET REGISTRATION DATA
// =========================================================

function getRegistrationData() {

    const savedData =
        localStorage.getItem(
            "livewireRegistration"
        );


    if (!savedData) {

        return null;

    }


    try {

        return JSON.parse(
            savedData
        );

    }

    catch(error) {

        return null;

    }

}



// =========================================================
// PROFILE BUTTON
// =========================================================

profileButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        profileDropdown.classList.toggle(
            "show"
        );

    }
);



// =========================================================
// VIEW MY PROFILE
// =========================================================

viewProfileBtn.addEventListener(
    "click",
    function() {

        profileDropdown.classList.remove(
            "show"
        );

        openMyProfile();

    }
);



// =========================================================
// OPEN MY PROFILE
// =========================================================

function openMyProfile() {

    const data =
        getRegistrationData();


    if (!data) {

        alert(
            "Please register first."
        );

        return;

    }


    // =====================================================
    // BASIC DETAILS
    // =====================================================

    document.getElementById(
        "profileName"
    ).innerText =
        data.name || "-";


    document.getElementById(
        "profilePhone"
    ).innerText =
        data.phone || "-";


    document.getElementById(
        "profileEmail"
    ).innerText =
        data.email || "-";


    document.getElementById(
        "profileDob"
    ).innerText =
        data.dob || "-";


    document.getElementById(
        "profileAddress"
    ).innerText =
        data.address || "-";


    document.getElementById(
        "profileArea"
    ).innerText =
        data.area || "-";


    document.getElementById(
        "profileDistrict"
    ).innerText =
        data.district || "-";


    document.getElementById(
        "profilePincode"
    ).innerText =
        data.pincode || "-";


    document.getElementById(
        "profileCareer"
    ).innerText =
        data.careerStatus || "-";


    document.getElementById(
        "profileCourse"
    ).innerText =
        data.course || "-";


    document.getElementById(
        "profileMessage"
    ).innerText =
        data.message || "-";



    // =====================================================
    // STUDENT DETAILS
    // =====================================================

    const collegeRow =
        document.getElementById(
            "profileCollegeRow"
        );

    const departmentRow =
        document.getElementById(
            "profileDepartmentRow"
        );


    if (
        data.careerStatus ===
        "Student"
    ) {

        collegeRow.style.display =
            "block";

        departmentRow.style.display =
            "block";


        document.getElementById(
            "profileCollege"
        ).innerText =
            data.collegeName || "-";


        document.getElementById(
            "profileDepartment"
        ).innerText =
            data.department || "-";

    }

    else {

        collegeRow.style.display =
            "none";

        departmentRow.style.display =
            "none";

    }



    // =====================================================
    // WORKING PROFESSIONAL
    // =====================================================

    const companyRow =
        document.getElementById(
            "profileCompanyRow"
        );

    const workLocationRow =
        document.getElementById(
            "profileWorkLocationRow"
        );


    if (
        data.careerStatus ===
        "Working Professional"
    ) {

        companyRow.style.display =
            "block";

        workLocationRow.style.display =
            "block";


        document.getElementById(
            "profileCompany"
        ).innerText =
            data.companyName || "-";


        document.getElementById(
            "profileWorkLocation"
        ).innerText =
            data.workLocation || "-";

    }

    else {

        companyRow.style.display =
            "none";

        workLocationRow.style.display =
            "none";

    }



    // =====================================================
    // MESSAGE
    // =====================================================

    const messageRow =
        document.getElementById(
            "profileMessageRow"
        );


    if (data.message) {

        messageRow.style.display =
            "block";

    }

    else {

        messageRow.style.display =
            "none";

    }



    // =====================================================
    // SHOW MODAL
    // =====================================================

    profileModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



// =========================================================
// CLOSE PROFILE
// =========================================================

profileClose.addEventListener(
    "click",
    closeMyProfile
);



function closeMyProfile() {

    profileModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}



// =========================================================
// CLOSE PROFILE WHEN CLICKING OUTSIDE
// =========================================================

profileModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "profile-modal-overlay"
            )
        ) {

            closeMyProfile();

        }

    }
);



// =========================================================
// CLOSE PROFILE WITH ESCAPE
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeMyProfile();

        }

    }
);



// =========================================================
// CLOSE PROFILE DROPDOWN WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        if (
            profileWrapper &&
            !profileWrapper.contains(
                event.target
            )
        ) {

            profileDropdown.classList.remove(
                "show"
            );

        }

    }
);



// =========================================================
// PROTECTED COURSE LINKS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const protectedLinks =
            document.querySelectorAll(
                ".protected-link"
            );


        protectedLinks.forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function(event) {


                        // NOT REGISTERED

                        if (
                            !isRegistered()
                        ) {

                            event.preventDefault();


                            alert(
                                "Please register first to explore the courses."
                            );


                            document
                                .getElementById(
                                    "register"
                                )
                                .scrollIntoView({

                                    behavior: "smooth",

                                    block: "start"

                                });

                            return;

                        }

                    }
                );

            }
        );

    }
);



// =========================================================
// NAVBAR SHADOW ON SCROLL
// =========================================================

window.addEventListener(
    "scroll",
    function() {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (
            window.scrollY > 40
        ) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(36,79,104,0.14)";

        }

        else {

            navbar.style.boxShadow =
                "0 4px 18px rgba(36,79,104,0.08)";

        }

    }
);



// =========================================================
// PAGE LOAD
// =========================================================

window.addEventListener(
    "DOMContentLoaded",
    function() {


        // If already registered,
        // show profile icon

        if (
            isRegistered()
        ) {

            showRegisteredProfile();

        }

    }
);



// =========================================================
// PAGE SHOW
// =========================================================

window.addEventListener(
    "pageshow",
    function() {

        if (
            isRegistered()
        ) {

            showRegisteredProfile();

        }

    }
);