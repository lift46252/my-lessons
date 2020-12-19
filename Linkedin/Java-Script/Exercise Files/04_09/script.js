let course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendrikssen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function () {
        return ++course.views;
    }    
}
console.log(course.views);
course.updateViews();
console.log(course.views);