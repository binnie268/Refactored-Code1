function func(s,a,b) {
   
    if(isEmpty(s)) {
        return -1;
    }

    var aIndex = findIndex(s,a);
    var bIndex = findIndex(s,b);

    if (isIndexPresent(aIndex)) {

        if(!isIndexPresent(bIndex))
        return aIndex;

    return Math.max(aIndex, bIndex)
    }

    // we can also just get rid of the if statement below and
    // return bIndex and not have the if bindex is present check, but for
    // a logical control flow and redability, I have added the if check

    if (isIndexPresent(bIndex)) {
        return bIndex;
    }
    return -1;

}

function isEmpty(s) {
    if (s.match(/^$/)) {
        return true;
    }
}

function findIndex(s,char) {
    return s.indexOf(char)
}

function isIndexPresent(index) {
    if (index !== -1)
        return true;
    return false;
}
console.log(func("Hello", 'd', 'd'))