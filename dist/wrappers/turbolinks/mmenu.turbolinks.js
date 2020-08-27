export default function () {
    var classnames;
    document.addEventListener('turbolinks:request-start', function (evnt) {
        console.log("request-start");
        classnames = document
            .querySelector('.mm-wrapper')
            .className.split(' ')
            .filter(function (name) { return /mm-/.test(name); });
    });
    document.addEventListener('turbolinks:load', function (evnt) {
        if (typeof classnames === 'undefined') {
            return;
        }
        document.querySelector('.mm-wrapper').className = classnames;
    });
}
