'use strict';

function f(p1, p2, p3){
    console.log("p1 is %s", p1);
    console.log("p2 is %s", p2);
    console.log("p3 is %s", p3);
}

var v1=1, v2 = 2, v3 = 3, v4 = 4;
// aantal argumenten = aantal parameters
f(v1,v2,v3);  // важен е последователността, по която се извикват параметрите във функцията
//p1 = v1, p2 = v2, p3 = v3

// aantal argumenten < aantal parameters
f(v1,v2); 
//p1 = v1, p2 = v2, p3 = undefined

// aantal argumenten > aantal parameters
f(v1,v2,v3,v4); 
// p1 = v1, p2 = v2, p3 = v3, v4 в този случай няма да се изпълни, защото JS в този случай не изпълнява допълнителният параметър