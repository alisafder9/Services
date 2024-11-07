function toggleMenu(){
    $("nav").toggle('action');
    // we can use slide(up,down,toggle,in,out) and fade(in, out, toggle) 
    // and duration like slow fast and time setting 1000=1s
    $("nav").slideIn(2000);
    $("nav").slideOut(2000);
}