function obfuscateCode() {
    // Get the input code
    const inputCode = document.getElementById('inputCode').value;
    
    // Perform basic obfuscation
    const obfuscatedCode = hardObfuscate(inputCode);
    
    // Display the obfuscated code
    document.getElementById('outputCode').value = obfuscatedCode;
}

function basicObfuscate(code) {
    // Replace variable names with single letters
    const variablePattern = /\bvar\s+(\w+)|\blet\s+(\w+)|\bconst\s+(\w+)/g;
    let variables = {};
    let count = 0;

    // Find all variable names and assign new names
    code = code.replace(variablePattern, (match, p1, p2, p3) => {
        const variable = p1 || p2 || p3;
        if (!variables[variable]) {
            variables[variable] = String.fromCharCode(97 + count++); // a, b, c, ...
        }
        return match.replace(variable, variables[variable]);
    });

    // Minify code by removing unnecessary whitespace
    code = code.replace(/\s+/g, ' ').trim();
    
    return code;
}


function hardObfuscate(code) {
    const obfuscateVaribleList = []
    const obfuscateVarible = function() {
        const prefix = '_0x'
        let string = prefix


        while (true) {
            for (let i = 0; i < 9; i++) {
                string = string + Math.floor((Math.random() + 1) * 9)
            }

            if (!obfuscateVaribleList[string]) {
                obfuscateVaribleList.push(string)

                return string
            } else {
                string = prefix
            }
        }
    }

    const stringContainerVar = obfuscateVarible()

    const AddFunctionToTable = function(code) {
        let v1 = obfuscateVarible()
        let v2 = obfuscateVarible()

        return code
    }


    let obfuscateCodeString = function(code) {
        let table_containing_math = [];
        let string = '';


        string += [...code].map(char => char.charCodeAt(0));


        return string
    }

    let obfuscateCodeStringV2 = function(code) {
        let table_containing_math = [];
        let string = '';
        let stringMathTable = [];

        let Random = function(min, max) {
            return Math.floor((Math.random() + min) * max)
        }
        //console.log(code)

        for (let i = 0; i <= code.length; i++) {
            let v1 = Random(200, 300);
            let v2 = code.substring(i, i + 1);
            //console.log(v2, i);            
            let v3 = v2 + v1;
            let v4 = obfuscateVarible()


            if (v2 == '`') {
                v2 = "'`'"
            } else if (v2 == '"') {
                v2 = `'"'`
            } else if (v2 == "'") {
                v2 = `"'"`
            } else {
                v2 = `'${v2}'`
            }

            if (i == 0) {
                string += `switch(${hardObfuscateV3}){`
            }

            string += `case(${i}):let ${v4}=${v2};${hardObfuscateV2}+=${v4};${hardObfuscateV3}+=1;`

            if (i >= code.length) {
                string += `break;}if(${hardObfuscateV3}>=${i})break;`
            }
        }


        return string
    }


    let Obfuscated_Var_1 = obfuscateVarible()
    let Obfuscated_Var_2 = obfuscateVarible()
    let Obfuscated_Var_3 = obfuscateVarible()
    let Obfuscated_Var_4 = obfuscateVarible()
    let Obfuscated_Var_5 = obfuscateVarible()
    let Obfuscated_Var_6 = obfuscateVarible()
    let Obfuscated_Var_7 = obfuscateVarible()
    let Obfuscated_Var_8 = obfuscateVarible()


    let ObfuscateV2_Function = function(code) {
        const mathTable = [];
        let string = '';
        let number = 0;

        string += [...code].map(str => {
            let enchanted = str.charCodeAt(0);
            let number2 = Math.floor((Math.random() + 489) * 94902);

            console.log(enchanted + number2)

            mathTable[number] = number2;

            enchanted += number2;

            number++;

            return enchanted
        })

        string = string.toString()

        return [string.toString(), mathTable]
    }


    let [ObfuscatedV2, table] = ObfuscateV2_Function(code);

    console.log(ObfuscatedV2)
    console.log(table)
    let obfuscateV2 = `
// LOL
(function(){
    const ${Obfuscated_Var_1}='';
    const ${Obfuscated_Var_2}='';
    const ${Obfuscated_Var_3}='';
    const ${Obfuscated_Var_4}=(function(){
        let ${Obfuscated_Var_7}=1;
        let ${Obfuscated_Var_8}='';
        while(true){
        ${(function(){
            let start = `switch(${Obfuscated_Var_7}){`

            for (let i = 1; i <= table.length; i++) {
                let v1 = obfuscateVarible()
                let v2 = obfuscateVarible()
                let v3 = obfuscateVarible()

                console.log(table[i - 1])
                console.log(ObfuscatedV2.split(',')[i - 1])

                start += `case(${i}):const ${v1}=${ObfuscatedV2.split(',')[i - 1]};const ${v2}=${v1}-${table[i - 1]};const ${v3}=String.fromCharCode;${Obfuscated_Var_8}+=${v3}(${v2});${Obfuscated_Var_7}++;`
            }

            start += `};if(${Obfuscated_Var_7}>=${table.length})break;`

            return start;
        })()}
        }
        return ${Obfuscated_Var_8}
    })();
    const ${Obfuscated_Var_5}=${Obfuscated_Var_4};
    const ${Obfuscated_Var_6}=[];
    console.log(${Obfuscated_Var_4})
    eval(${Obfuscated_Var_4});
})();
`

    let CodeInside = AddFunctionToTable(code)

    console.log(obfuscateV2)

    let obfuscatedString = obfuscateCodeString(obfuscateV2)

    let deObfuscateVar = obfuscateVarible()
    let deObfuscateVarArg1 = obfuscateVarible()
    let deObfuscateVarVar1 = obfuscateVarible()
    let deObfuscateVarVar2 = obfuscateVarible()
    let deObfuscateVarVar3 = obfuscateVarible()
    let deObfuscateVarVar4 = obfuscateVarible()
    

    let hardObfuscateV1 = obfuscateVarible()
    let hardObfuscateV2 = obfuscateVarible()
    let hardObfuscateV3 = obfuscateVarible()

    let hardObfuscateV4 = obfuscateVarible()

    let obfuscate = `// Obfuscated using JavaScript Obfuscator (Private)
const ${hardObfuscateV1}=parseInt;
let ${hardObfuscateV2}='';
let ${hardObfuscateV3}=0;

const ${deObfuscateVar}=function(${deObfuscateVarArg1}){
    const ${deObfuscateVarVar1}=',';
    const ${deObfuscateVarVar2}=${deObfuscateVarArg1}.split(${deObfuscateVarVar1}).map(${deObfuscateVarVar3}=>${hardObfuscateV1}(${deObfuscateVarVar3},10));
    const ${deObfuscateVarVar4}=String.fromCharCode(...${deObfuscateVarVar2});
    return ${deObfuscateVarVar4};
}
while(true){
    ${(function(){
        return obfuscateCodeStringV2(obfuscatedString);
    })()}
};
const ${hardObfuscateV4}=${deObfuscateVar}(${hardObfuscateV2});
console.log(${hardObfuscateV2});
console.log(${hardObfuscateV4});
(new Function(${hardObfuscateV4}))();
`;




    return obfuscate
}

