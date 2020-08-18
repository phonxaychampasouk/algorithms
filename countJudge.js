i: array and N is size of towns persons
o: which towns persons is the judge
c: if no judge, return -1
e: -

- store first index of tuple as person that trusts
- find all towns people in trustee
- check trusts against trustee
- if only one item is left, that is the judge.

*/

const findJudge= (N, trust) => {
    let judge;
    let townsPeople = {}
    for ( let i = 1; i <= N; i += 1){
        townsPeople[i] = {};
        townsPeople[i].trusts = new Array();
        townsPeople[i].trustedBy = new Array();
        }
    trust.forEach(trustee=>{
        townsPeople[trustee[0]].trusts.push(trustee[1])
        townsPeople[trustee[1]].trustedBy.push(trustee[0])
    })
    for(let person in townsPeople){
        let townsPerson =townsPeople[person];
        if(townsPerson.trustedBy.length === N - 1
         && !townsPerson.trusts.length ){
            if( !judge ){
                judge = person;
            }
        }
        }
        if(!judge){
            return -1;
        }
        return judge;
        }
