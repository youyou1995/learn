let obj = {a: 1, b: 1, c: 1, d: 1};

function switchObj(type) {
    switch (type) {
        case 'a':
            obj.a = 0;
        case 'b':
            obj.b = 0;
        case 'c':
            obj.c = 0;
        case 'd':
            obj.d = 0;
            break;
    }
}

switchObj('a');
console.log('obj', obj);
