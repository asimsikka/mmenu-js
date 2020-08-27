export default function () {
    var classnames;
    document.addEventListener('turbolinks:before-visit', function (evnt) {
        console.log("request-start");
        classnames = document
            .querySelector('.mm-wrapper')
            .className.split(' ')
            .filter(function (name) { return /mm-/.test(name); });
        console.log(classnames);        
        console.log("request-end");
    });
    document.addEventListener('turbolinks:load', function (evnt) {
        if (typeof classnames === 'undefined') {
            return;
        }
        document.querySelector('.mm-wrapper').className = classnames;
    });
}
