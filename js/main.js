$(document).ready( () => {
    // dynamically generate email address at runtime to avoid those bastard scrapers
    var mail = $('a.email');
    var href = mail.attr('href').replace('.', '@gmail.com');
    var cont = mail.text().replace(' at ', '@');
    mail.attr('href', href);
    mail.text(cont);
    console.log("replaced href with " + href);
});