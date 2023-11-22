function solution(survey, choices) {
    const hash = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    
    for (let i = 0; i < survey.length; i++) {
        switch (true) {
            case choices[i] <= 3:
                hash[survey[i][0]] += (4 - choices[i])
                break;
            case 5 <= choices[i]:
                hash[survey[i][1]] += (choices[i] - 4)
                break;
            default:
                break;       
        }    
    }
    
    const res = Object.entries(hash) 
    
    const tmp = [];
    for (let i = 0; i < 4; i++) {
        const start = i * 2
        const [a, b] = res.slice(start, start + 2)
        if (a[1] > b[1]) tmp.push(a[0])
        else if (a[1] < b[1]) tmp.push(b[0])
        else tmp.push([a, b].sort((a, b) => a - b)[0][0])
    }
    
    return tmp.join('');
}