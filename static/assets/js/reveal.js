const button = $("#contact-button");
const contactInfo = $("#contact-info")
button.one("click", function reveal () {
    contactInfo.append(`<a href="mailto:derekdrumaway@gmail.com">derekdrumaway@gmail.com</a>
    <div>510.631.3130</div>`)
});