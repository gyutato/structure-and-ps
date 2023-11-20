function solution(_today, terms, privacies) {
    const getDay = (year, month, day) => year*12*28 + month*28 + day

    const parseToday = _today.split('.').map(d => Number(d))
    const today = getDay(parseToday[0], parseToday[1], parseToday[2])
    
    // 약관-기간 해시테이블 생성
    const termsHash = {}
    terms.map(term => {
        const parseTerm = term.split(' ')
        termsHash[parseTerm[0]] = Number(parseTerm[1])
    })
     
     
    return privacies.map((privacy, index) => {
        const parsePrivacy = privacy.split(" ")
        
        // 약관
        const term = parsePrivacy[1]
        const termDate = termsHash[term]
        // 수집일
        const parseDate = parsePrivacy[0].split('.').map(d => Number(d))
        const date = getDay(parseDate[0], parseDate[1], parseDate[2])
        
        // 유효기간 계산
        const validDate = date + term*28
        
        // 유효기간 비교        
        return today >= validDate ? index + 1 : false
    }).filter(v => v)
 }