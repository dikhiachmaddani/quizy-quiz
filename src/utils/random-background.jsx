let isHaveIt = [];

export const randomBackgroundColor = () => {
    const listBackgrounds = Array("bg-primary", "bg-blue-500", "bg-emerald-500", "bg-red-500", "bg-fuchsia-400", "bg-slate-500", "bg-violet-500", "bg-amber-500", "bg-lime-500", "bg-sky-500", "bg-teal-500");
    let randomNumber = listBackgrounds[Math.floor(Math.random() * listBackgrounds.length)];
    if (!isHaveIt.includes(randomNumber)) {
        isHaveIt.push(randomNumber);
        if (isHaveIt.length == 4) isHaveIt = [];
        return randomNumber;
    } else {
        if (isHaveIt.length < listBackgrounds.length) {
            return randomBackgroundColor();
        } else {
            console.log('No more numbers available.')
            return false;
        }
    }
};
