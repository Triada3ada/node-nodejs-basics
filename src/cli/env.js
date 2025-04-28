const parseEnv = () => {
    // Write your code here
    const startsWithRSS = /^RSS_/;

    process.env.RSS_school = 'cool';
    process.env.RSS_Me = 'very cool';


    const onlyRSSvariables = Object.keys(process.env)
        .map((value, i) => {
            return value.match(startsWithRSS);
        })
        .filter((item) => item);
        
    onlyRSSvariables.forEach(element => {
        console.log(`${element['input']}=`+ process['env'][element['input']]);
    });    
};

parseEnv();
