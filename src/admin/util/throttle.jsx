export default function throttle (callback, limit ,context) {
    var wait = false;
    return function () {
        if (!wait) {
            let args = Array.apply(0 , arguments);
            callback.apply(context || void 0, args.splice(2));
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}
