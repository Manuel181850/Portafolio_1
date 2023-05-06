function RFC(){
    var nom, ap, am, f_a, f_m, f_d;
    nom=document.getElementById("nom").value;
    ap=document.getElementById("ap").value;
    am=document.getElementById("am").value;
    f_a=document.getElementById("f_a").value;
    f_m=document.getElementById("f_m").value;
    f_d=document.getElementById("f_d").value;
    var ext1 = nom.charAt("0");
    var ext2 = ap.substring("0", "2");
    var ext3 = am.charAt("0");
    var ext4 = f_a.substring("2", "4");
    var ext5 = f_m.substring("0", "2");
    var ext6 = f_d.substring("0", "2");

    var res = ext1 + ext2 + ext3 + ext4 + ext5 + ext6;
    var mayus = res.toUpperCase();

    document.getElementById("result").value=mayus;
}