/* это штука котораэ помагает структурировать код если есть однотипные елементы*/
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
/*вот как можно обратится к enum*/
var membership = Membership.Standard;
var reverse = Membership[2];
console.log(membership);
console.log(reverse);
/*---------------------------------------*/
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Vk"] = "Vk";
    SocialMedia["facebook"] = "facebook";
    SocialMedia["instagram"] = "instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.facebook;
console.log(social);
