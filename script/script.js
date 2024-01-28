//Get the Shading text elements of the Webpage
let titles = document.querySelectorAll('h2');
let title = document.getElementById('title');
let image = document.getElementById('WellIMG');
let image2 = document.getElementById('WellIMG2');
let image3 = document.getElementById('WellIMG3');
let Welcome_title = document.getElementById('Welcoming');
let Welcome_Span = document.getElementById('Welcome-span');
let Hidden_Text = document.getElementById('hidden-text');
let Love_Text = document.getElementById('love-text');
let TimeCounter = document.getElementsByClassName('Time-Counter')[0];
let KissCounter = document.getElementsByClassName('Kiss-Counter')[0];
//Last Rond
let Kisses = document.getElementById('Kisses');
let Mather = document.getElementById('Math');
let Complex = document.getElementById('Complex');
//Get the Element, which counts the time from the first Kiss
//First the Date
let Yearer = document.getElementById('Year');
let Monther = document.getElementById('Month');
let Dayer = document.getElementById('Day');
//For second the Watch
let Hourer = document.getElementById('Hour');
let Minuter = document.getElementById('Minutes');
let Seconder = document.getElementById('Seconds');
//Get the Date values for the project
let Dates = new Date();
let targetDate = new Date(2020, 9, 17, 23, 30, 0);
//Calculate the difference
let timediff = Dates - targetDate;
console.log(timediff);
//Years
Yearer.innerHTML =  Math.floor(timediff / (365.25 * 24 * 60 * 60 * 1000));
if(Yearer.innerHTML < 9){
    Yearer.innerHTML = '0' + Yearer.innerHTML;
}
//Months
Monther.innerHTML = Dates.getMonth() - targetDate.getMonth() + 13;
if(Monther.innerHTML < 9){
    Monther.innerHTML = '0' + Monther.innerHTML;
}
//Days
Dayer.innerHTML = Dates.getDate() - targetDate.getDate();
if(Dayer.innerHTML < 9){
    Dayer.innerHTML = '0' + Dayer.innerHTML;
 }
//Hours
Hourer.innerHTML = Dates.getHours() - targetDate.getHours() + 23;
if(Hourer.innerHTML < 10){
    Hourer.innerHTML = '0' + Hourer.innerHTML;
}
//Minutes
Minuter.innerHTML = Dates.getMinutes() - targetDate.getMinutes() + 59;
if(Minuter.innerHTML < 10){
    Minuter.innerHTML = '0' + Minuter.innerHTML;
}
//Seconds
Seconder.innerHTML = Dates.getSeconds();
//Get the Element for the Kiss count
let Kiss_Count = document.getElementById('Pusser');
let NumberofKiss = Math.floor(Math.random(10000000) * 100000000);
Kiss_Count.innerHTML = NumberofKiss;
//Interval for the Time
let Interval;
//Make the TimeCounter work
window.addEventListener('load', function(){
    Interval = setInterval(function(){
        //Seconds
        Seconder.innerHTML++;
        //Tikk-takk
        if(Seconder.innerHTML < 10){
            Seconder.innerHTML = '0' + Seconder.innerHTML;
        } else if(Seconder.innerHTML == 59){
            Seconder.innerHTML = 0;
            Minuter.innerHTML++;
        }
        //Hours
        if(Minuter.innerHTML < 0){
            Minuter.innerHTML = parseInt(Minuter.innerHTML, 10) + 59;
        }else if(Minuter.innerHTML > 59){
            Minuter.innerHTML = 0;
            Hourer.innerHTML++;
        }
        if(Hourer.innerHTML < 0){
            Hourer.innerHTML = Hourer.innerHTML + 24;
        } else if(Hourer.innerHTML == 24){
            Hourer.innerHTML = '00';
            Dayer.innerHTML++
        }
        /*For Months*/
        /*For months with 31 day*/
        if(Monther.innerHTML == 1 || Monther.innerHTML == 3 || Monther.innerHTML == 5 || 
            Monther.innerHTML == 7 || Monther.innerHTML == 8 || Monther.innerHTML == 10){
            if(Dayer.innerHTML == 31){
                Dayer.innerHTML = 1;
                Monther.innerHTML++
            }
        /*Special for February*/
        } else if(Monther.innerHTML == 2){
            if(Yearer.innerHTML % 4 == 0){
                if(Dayer.innerHTML == 29){
                    Dayer.innerHTML = 1;
                    Monther.innerHTML++
                } else if(Dayer.innerHTML == 28){
                    Dayer.innerHTML = 1;
                    Monther.innerHTML++
                }
            }
        }
        /*For months with 30day*/
        if(Monther.innerHTML == 4 || Monther.innerHTML == 6 || Monther.innerHTML == 9 || Monther.innerHTML == 11){
            if(Dayer.innerHTML == 31){
                Monther.innerHTML++
                Dayer.innerHTML = 1;
            }

        }
        /*Special for December and the New Year*/
        if(Monther.innerHTML > 12){
            if(Dayer.innerHTML == 32){
                Dayer.innerHTML = 1;
                Monther.innerHTML = 1;
                Yearer.innerHTML++;
            }
        }
        //KissCounter
        if(Seconder.innerHTML % Math.floor(Math.random(6) * 11) == 0){
            Kiss_Count.innerHTML++;
        }
    }, 1000);
});
//The Code for shaping and styling the Webpage's text to make it beauty. With scroll and etc.
titles.forEach(function(Element){
    let position = Element.getBoundingClientRect();
    console.log(Element, position);
});

let Timepos = TimeCounter.getBoundingClientRect();
let Kisspos = KissCounter.getBoundingClientRect();

//GetRect function etc.
window.addEventListener('scroll', function(){
    let Scrollposition = window.scrollY;
    console.log(Scrollposition);

    let titleps = 300;
    let Welcomingpos = 1200;
    let loveTextpos = 1800;
    let Timepos2 = 2000;
    let KissPos2 = 2300;

    if(Scrollposition >= titleps){
        title.style.transition = 'opacity 4s';
        title.style.visibility = 'visible';
        title.style.opacity = '1';

        image.style.transition = 'opacity 5s';
        image.style.visibility = 'visible';
        image.style.opacity = '1';
    }
    if(Scrollposition >= Welcomingpos){
        Welcome_title.style.transition = 'opacity 5s';
        Welcome_title.style.visibility = 'visible';
        Welcome_title.style.opacity = '1';

        Welcome_Span.style.transition = 'opacity 7s';
        Welcome_Span.style.visibility = 'visible';
        Welcome_Span.style.opacity = '1';

        Hidden_Text.style.transition = 'opacity 9s';
        Hidden_Text.style.visibility = 'visible';
        Hidden_Text.style.opacity = '1';

        image2.style.transition = 'opacity 11s';
        image2.style.visibility = 'visible';
        image2.style.opacity = '1';

        image3.style.transition = 'opacity 11s';
        image3.style.visibility = 'visible';
        image3.style.opacity = '1';
    }

    if(Scrollposition >= loveTextpos){
        Love_Text.style.transition = 'opacity 5s';
        Love_Text.style.visibility = 'visible';
        Love_Text.style.opacity = '1';
    }

    if(Scrollposition >= Timepos2){
        TimeCounter.style.transition = 'opacity 5s';
        TimeCounter.style.visibility = 'visible';
        TimeCounter.style.opacity = '1';
    }

    if(Scrollposition >= KissPos2){
        KissCounter.style.transition = 'opacity 11s';
        KissCounter.style.visibility = 'visible';
        KissCounter.style.opacity = '1';

        Kisses.style.transition = 'opacity 5s';
        Kisses.style.visibility = 'visible';
        Kisses.style.opacity = '1';
        
        Mather.style.transition = 'opacity 7s';
        Mather.style.visibility = 'visible';
        Mather.style.opacity = '1';

        Complex.style.transition = 'opacity 9s';
        Complex.style.visibility = 'visible';
        Complex.style.opacity = '1';

        Kiss_Count.style.transition = 'opacity 11s';
        Kiss_Count.style.visibility = 'visible';
        Kiss_Count.style.opacity = '1'; 
    }
});



console.log('The position:', Timepos);
console.log('The position:', Kisspos);


