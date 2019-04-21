function sendMail(form) {
    emailjs.send("gmail", "milestoneproject", {
            "from_name": form.name.value,
            "from_email": form.emailaddress.value,
            "Request": form.projectsummary.value
        })
        .then(
            function(response) {
                console.log('success', response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
        return false;
}
