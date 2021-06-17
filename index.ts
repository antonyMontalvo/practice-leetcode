function romanToInt(s: string): number {
    if(s.length>=1 && s.length<=15){
        const numbers = [{let:'I',num:1},{let:'V',num:5},{let:'X',num:10},{let:'L',num:50},{let:'C',num:100},{let:'D',num:500},{let:'M',num:1000}];
        let arrStr = s.split('');
        let resp=0;

        for (let i = 0; i < arrStr.length; i++) {
            const actual = numbers.find(n => n.let == arrStr[i]);
            if(arrStr[i+1]){
                const next = numbers.find(n => n.let == arrStr[i+1]);
                if(next.num>actual.num) {
                    resp += next.num-actual.num;
                    i++;
                }
                else resp += actual.num;
            } else resp += actual.num;
        }
        return resp;
    }
    return 0;
};

function main(){
    return romanToInt('IX')
}

main();