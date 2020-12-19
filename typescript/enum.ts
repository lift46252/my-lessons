/* это штука котораэ помагает структурировать код если есть однотипные елементы*/
enum Membership {
    Simple,
    Standard,
    Premium
}
/*вот как можно обратится к enum*/
const membership = Membership.Standard
const reverse = Membership[2]
console.log(membership)
console.log(reverse)
/*---------------------------------------*/
enum SocialMedia{
    Vk="Vk",
    facebook = "facebook",
    instagram = "instagram"
}
const social = SocialMedia.facebook
console.log(social)