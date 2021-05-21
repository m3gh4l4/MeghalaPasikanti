
let speed=150;
let i=0;
let text="Welcome to my world. Have a nice day :) ";

function typeWriter() 
{
    if(i<text.length)
    {
        document.getElementById('intro_text').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

let r = document.querySelector(':root');
let expanded = false;
function myFunction(num)
{
    console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--w'));
    document.getElementsByClassName('dropdown-list-res')[0].style.display="none";
    let ele = document.getElementsByClassName("swiper-slide-active");
    let elep=document.getElementsByClassName("swiper-slide-prev");
    // window.onresize = function() {
    //     expanded = true;
    //     document.getElementsByClassName('swiper-slide-active')[0].classList.add('center')
    //     myFunction(0)
    // }
    // if(document.getElementById('four').classList.contains('swiper-slide-active') || document.getElementById('four').classList.contains('swiper-slide-duplicate-active')) {
    //     console.log(document.getElementById('four').classList)
    //     console.log('hope')
    //     console.log(document.getElementsByClassName('container')[3].childNodes)
    //     setTimeout(() => {
    //         document.getElementById('tag').classList.add('arttagani')
    //     }, 1000);
    // }
    // else {
    //     console.log(document.getElementById('four').classList)
    //     console.log('no hope')
    // }
    if(expanded)
    {
        expanded = false;

        r.style.setProperty('--height', '40vh')
        r.style.setProperty('--scroll', 'hidden')
        elep[0].classList.remove('outani')
        ele[0].classList.remove('outani')
        ele[0].classList.remove('upani')
        ele[0].classList.add('downani')
        elep[0].classList.add('inani')
        
        swiper.params.grabCursor=true;
        swiper.setGrabCursor();
        swiper.params.cssMode=false;
        if(num==2)
        {
            let s= document.getElementsByClassName("circle");
            let c=document.getElementsByClassName('counter');
            for(let i=0;i<s.length;i++)
            {
                s[i].classList.remove('circleani');
                c[i].innerText=0;
            }
        }
        
    }
    else {
        expanded = true;
        r.style.setProperty('--scroll', 'scroll')
        r.style.setProperty('--height','100vh')
        ele[0].classList.add("upani");
        elep[0].classList.add('outani')
        elep[0].classList.remove('inani')
        ele[0].classList.remove('inani')
        ele[0].classList.remove('downani')
        swiper.params.grabCursor=false;
        swiper.unsetGrabCursor();
        swiper.params.cssMode = true;
        if(num==2)
        {
            let s= document.getElementsByClassName("circle");
            let c=document.getElementsByClassName('counter');
            for(let i=0;i<s.length;i++)
            {
                s[i].classList.add('circleani');
                c[i].innerText="0";
            }

            setTimeout(() => {
                if(expanded)
                    docounting();
            }, 2000);
        }
        else if(num==4)
        {
            let a=document.getElementsByClassName('arttag')[0];
            a.style.innerText="lskdh";
            a.style.color="black"
            console.log("gadf");
            console.log(document.getElementById("four").classList)
        }
        
    }
    
}


// skills js

flexFont = function () {
    var divs = document.getElementsByClassName('skill-name');
    // console.log(divs.length);
    for(var i = 0; i < divs.length; i++) {
        var len=divs[i].innerText.length; 
        if(len<=2)
            len+=1.5;
        else if(len==5)
            len--;
        else if(len>=6&&len<=7)
            len-=3;
        else if(len>7 && len<=9)
            len-=5;
        else if(len>9)
            len-=6
        var fs=6/len;
        divs[i].style.fontSize = fs+'vw';
    }
};



function docounting() 
{
    const counters=document.querySelectorAll('.counter');
    speed=400;
    counters.forEach(counter => {
        const updateCount = () => {
            const target=+counter.getAttribute('data-target');
            const count= +counter.innerText;
            if(count<target && expanded)
            {
                counter.innerText++;
                setTimeout(updateCount,(25-target/10));
            }
            else 
            {
                counter.innerText=target;
            }
        };
        updateCount();
    });
}

function dropmenu() 
{
    console.log("dropmenu")
    let ele=document.getElementsByClassName('dropdown-list-res');
    if(ele[0].style.display!="none" && ele[0].style.display!="")
    {
        console.log("if")
        ele[0].style.display="none";
    }
    else
    {
        ele[0].style.display="inline-block";
        ele[0].style.visibility = 'visible';
        ele[0].style.position="fixed";
        ele[0].style.boxShadow="0px 8px 16px 0px rgba(0,0,0,0.8)";
    }
}