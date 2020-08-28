export default function () {
    var classnames;
    document.addEventListener('turbolinks:request-start', function (evnt) {
        console.log("request-start");
        classnames = document
            .querySelector('body')
            .className.split(' ')
            .filter(function (name) { return /mm-/.test(name); });
        console.log(classnames);        
        console.log("request-end");
    });
    document.addEventListener('turbolinks:load', function (evnt) {
        if (typeof classnames === 'undefined') {
            return;
        }
        document.querySelector('body').className = classnames.join(" ");
    });
}
