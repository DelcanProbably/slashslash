$(document).ready( () => {
    // dynamically generate email address at runtime to avoid those bastard scrapers
    $('a.email').each( (index, element) => {
        var mail = $(element);
        var href = mail.attr('href').replace('.', '@gmail.com');
        var cont = mail.html().replace('_', '@gmail.com');
        mail.attr('href', href);
        mail.html(cont);
        console.log("replaced href with " + href);
    });
});