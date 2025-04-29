import * as util from 'node:util'

const parseArgs = () => {
    // Write your code here 
    const options = {
        propName: {
          type: 'string',
        },
        prop2Name: {
          type: 'string'
        }
      };

    const {values, positionals} = util.parseArgs({args: process.argv, options: options, allowPositionals: true});
    
    for (const key in values) {
        console.log(`${key} is ` + values[key]);
    }
};

parseArgs();