var tl=gsap.timeline()
tl
.from("#lnav",{
    position:"absolute",
    top:"-100%",
    duration:1,
    ease: Expo.easeInOut,

})
.from("#lnav a",{
    position:"absolute",
    top:"-100%",
    duration:1,
    ease: Expo.easeInOut,

})
.from("#lnav i",{
    position:"absolute",
    top:"-100%",
    duration:1,
    ease: Expo.easeInOut,
    delay:"-1"

})
.from("#text-center",{
    left:"-100%",
    duration:1,
    ease: Expo.easeInOut,
})