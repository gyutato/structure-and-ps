// 20/20

function solution(friends, gifts) {
    var answer = 0;
    const hash = {}
    const scoreHash = {}
    const giftHash = {}

    // 해시 초기화
    for (let i = 0; i < friends.length; i++) {
        giftHash[friends[i]] = 0
        hash[friends[i]] = {}
        for (let j = 0; j < friends.length; j++) {
            if (j === i) continue;
            hash[friends[i]][friends[j]] = {give: 0, receive: 0}
        }
    }

    // 해시 업데이트
    for (let gift of gifts) {
        const [giver, receiver] = gift.split(" ")
        hash[giver][receiver]['give']++
        hash[receiver][giver]['receive']++
    }

    // 각 이름 별 give, receive 내역 계산
    const _friends = Object.entries(hash)
    for (let friend of _friends) {
        const name = friend[0]
        const records = Object.entries(friend[1])

        let giveSum = 0
        let receiveSum = 0
        for (let record of records) {
            giveSum += record[1].give
            receiveSum += record[1].receive
        }

        scoreHash[name] = giveSum - receiveSum
    }

    // 선물을 받을 사람 계산
    for (let friend of _friends) {
        const me = friend[0]
        const records = Object.entries(friend[1])
        for (let record of records) {
            const name = record[0]
            const {give, receive} = record[1]
            // 상대방(name) 과의 선물 내역 비교
            if ((!give && !receive) || give === receive){
                // 선물을 주고받은 기록이 없거나, 주고받은 수가 같을 때
                if (scoreHash[me] > scoreHash[name]) {
                    giftHash[me]++
                } else if (scoreHash[me] < scoreHash[name]) {
                    giftHash[name]++
                } else continue;
            } else if (give > receive) {
                // 내가 더 많은 선물을 주었을 때
                giftHash[me]++
            } else if (give < receive) {
                // 상대방이 더 많은 선물을 주었을 때
                giftHash[name]++
            }
        }

    }

    // scoreHash 정렬
    const total = Object.entries(giftHash)
    const winner = total.sort((a, b) => b[1] - a[1])[0]

    return (winner[1] / 2)
}