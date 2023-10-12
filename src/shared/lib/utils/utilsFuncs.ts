

const getCurrentYear = (): number => {
    return new Date().getFullYear();
};



const formatDate = (date?: string | null): string | null => {
    if(!date){
        return null;
    }
    const nDate = new Date(date);
    if(!nDate) return null;
    return nDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};


const numWithSpaces = (num: number): string=> {
    return num.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
};

const arrToString = (arr?: Array<any>, key?: string): string=> {
    if(!arr || !arr.length) return '';
    return arr.reduce((acc, el)=> {
        if(key && el[key]){
            return acc + el[key] + ', ';
        }
        return acc + el + ', ';

    }, '').slice(0, -2);
};

const toHoursAndMinutes = (totalMinutes: number): string=> {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export {
    getCurrentYear,
    numWithSpaces,
    arrToString,
    toHoursAndMinutes,
    formatDate,
};