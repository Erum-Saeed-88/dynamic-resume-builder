var ids = ['name', 'email', 'phone', 'cnic', 'address', 'nationality', 'education', 'experience', 'skills'];
var elements = ids.map(function (id) { return document.getElementById(id); });
elements.forEach(function (element, index) {
    if (!element) {
        console.error("Element with ID '".concat(ids[index], "' not found."));
    }
});
var form = document.getElementById('resumeform');
var resumeDisplayElement = document.getElementById('resumeOutput');
if (!form || !resumeDisplayElement) {
    console.error('Form or resume display element is missing.');
}
else {
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        event.preventDefault(); // Prevent page reload
        // Getting input values    
        var fileInput = document.getElementById('profilePicture');
        var profilePictureURL = '';
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var cnic = ((_d = document.getElementById('cnic')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var address = ((_e = document.getElementById('address')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var nationality = ((_f = document.getElementById('nationality')) === null || _f === void 0 ? void 0 : _f.value) || '';
        var education = ((_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) || '';
        var experience = ((_h = document.getElementById('experience')) === null || _h === void 0 ? void 0 : _h.value) || '';
        var skills = ((_j = document.getElementById('skill')) === null || _j === void 0 ? void 0 : _j.value) || '';
        // Handle profile picture
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            var profilePictureFile = fileInput.files[0]; // Get the first selected file
            // Create a URL for the selected file
            profilePictureURL = URL.createObjectURL(profilePictureFile);
            console.log('Profile picture URL:', profilePictureURL); // Debug: Log the generated URL
        }
        else {
            profilePictureURL = ''; // No file selected
            console.log('No profile picture selected.'); // Debug: Log if no picture is selected
        }
        // Generate the image HTML if the profile picture exists
        var imageHTML = profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"max-width: 150px; height: auto;\">")
            : ''; // Empty string if no image is selected
        // Debug: Log the image HTML
        console.log('Generated image HTML:', imageHTML);
        // Create resume output
        var resumeHTML = "\n            <h2>RESUME</h2>\n            <br>\n            ".concat(imageHTML, "  <!-- Insert the profile picture here -->\n            <h3>Personal Information</h3> \n            <p><strong>Name:</strong><span contenteditable=\"true\"> ").concat(name, " </span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, " </span></p>\n            <p><strong>Number:</strong><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n            <p><strong>CNIC:</strong><span contenteditable=\"true\"> ").concat(cnic, " </span></p>\n            <p><strong>Address:</strong><span contenteditable=\"true\"> ").concat(address, " </span></p>\n            <p><strong>Nationality:</strong><span contenteditable=\"true\"> ").concat(nationality, " </span></p>\n            \n            <h3>Education:</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experience:</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            \n            <h3>Skills:</h3>\n            <p contenteditable=\"true\" >").concat(skills, "</p>\n        ");
        // Debug: Log the full resume HTML
        console.log('Generated resume HTML:', resumeHTML);
        // Generating Resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
