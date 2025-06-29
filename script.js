
    let memory = 0;

    function insertValue(value){
        // For percentage: convert 'a%b' to '(a/100)*b'
        if (value === '%') {
            let exp = result.value;
            if (/[+\-*/.]$/.test(exp) || exp === '') return;
            let match = exp.match(/(\d+\.?\d*)$/);
            if (match) {
                let num = match[1];
                result.value = exp.slice(0, -num.length) + '(' + num + '/100)';
            }
        } else {
            result.value += value;
        }
    }

    function clearResult(){
        result.value = '';
    }

    function deleteResult(){
        result.value = result.value.slice(0, -1);
    }

    function calculate(){
        try{
            result.value = eval(result.value);
        } catch (error){
            result.value = 'Error';
        }
    }

    function squareRoot() {
        try {
            if (result.value !== '') {
                result.value = Math.sqrt(eval(result.value));
            }
        } catch (error) {
            result.value = 'Error';
        }
    }

    function memoryAdd() {
        try {
            memory += Number(eval(result.value) || 0);
        } catch (e) {}
    }

    function memorySubtract() {
        try {
            memory-= Number(eval(result.value) || 0);
        } catch (e) {}
    }

    function memoryRecall() {
        result.value += memory;
    }

    function memoryClear() {
        memory = 0;
    }
